"use client";

import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// Shared validation schema (same as backend)
const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  emailOrPhone: z.string().min(5, "Provide a valid contact"),
  serviceType: z.string().min(2, "Select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honey: z.string().optional(),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [serviceType, setServiceType] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const raw = Object.fromEntries(formData.entries()) as Record<
      string,
      FormDataEntryValue
    >;

    const values: ContactValues = {
      name: raw.name?.toString() || "",
      emailOrPhone: raw.emailOrPhone?.toString() || "",
      serviceType,
      message: raw.message?.toString() || "",
      honey: raw.honey?.toString() || "",
    };

    // Client validation
    const parsed = ContactSchema.safeParse(values);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0];
      toast.error(firstError || "Invalid input");

      setLoading(false);
      return;
    }

    // POST api request
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });

      //1 throw error if offline
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        toast.error("You are offline. Please reconnect and try again.");
        return;
      }

      //2 HTTP-level failure (offline, server crash, route missing, etc)
      if (!res.ok) {
        toast.error("Network or server error. Please try again");
        return;
      }

      //2 Try parsing JSON — this fails when offline response is HTML
      let data;
      try {
        data = await res.json();
      } catch {
        toast.error("Unexpected server response");
        return;
      }

      // 3) Final sanity-check: must receive `{ success: true }`
      if (!data || data.success !== true) {
        toast.error(data?.message || "Something went wrong.");
        return;
      }

      toast.success("Message Sent");
      // e.currentTarget.reset();
      setServiceType("");
    } catch (err) {
      toast.error("Request failed. Please check your network.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Honeypot (hidden field) */}
      <input
        type="text"
        name="honey"
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <Input
        name="name"
        placeholder="Your name"
        required
        className="bg-white"
      />

      <div className="space-between flex items-center gap-5">
        <Input
          name="emailOrPhone"
          placeholder="Email or phone"
          className="w-[50%] bg-white"
          required
        />
        <Select onValueChange={setServiceType} value={serviceType}>
          <SelectTrigger className="w-[50%] bg-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Web Design">New Website</SelectItem>
            <SelectItem value="Branding">Website Re-design</SelectItem>
            <SelectItem value="Consultation">
              Graphic Design (flyers .etc)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Textarea
        name="message"
        placeholder="Your message"
        className="h-32 bg-white"
        required
      />

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
