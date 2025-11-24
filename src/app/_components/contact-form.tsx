"use client";

import { useRef, useState } from "react";
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
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  emailOrPhone: z
    .string()
    .min(5, "Contact info is too short")
    .max(50, "Contact info is too long")
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
      },
      { message: "Please enter a valid email or phone number" },
    ),
  serviceType: z.string().min(2, "Please select a service").max(50),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  honey: z.string().max(0, "Invalid submission").optional(),
});

type ContactValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

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
      const flattened = z.flattenError(parsed.error);

      const firstError =
        Object.values(flattened.fieldErrors).find(
          (errors) => errors && errors.length > 0,
        )?.[0] || "Invalid Input";

      toast.error(firstError);
      setLoading(false);
      return;
    }

    // POST api request
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      //1) Parse Response
      let data;
      try {
        data = await res.json();
        // console.log(data);
      } catch {
        toast.error("Unable to connect. Please check your connection.");
        setLoading(false);
        return;
      }

      //1b) throw error if offline
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        toast.error("You are offline. Please reconnect and try again.");
        return;
      }

      //2) Handle response scenarios
      if (res.status === 429) {
        // Rate limited
        toast.error(
          data.message || "Too many requests. Please try again later.",
        );
        setLoading(false);
        return;
      }

      if (res.status === 400) {
        // Validation error from backend
        if (data.fields) {
          // Show first field error
          const firstFieldError = Object.values(data.fields).find(
            (errors): errors is string[] =>
              Array.isArray(errors) && errors.length > 0,
          ) as string[] | undefined;

          toast.error(firstFieldError?.[0] || "Invalid input");
        } else {
          toast.error(data.error || "Invalid input");
        }
        setLoading(false);
        return;
      }

      //3) HTTP-level failure (offline, server crash, route missing, etc)
      if (!res.ok) {
        toast.error(data.error || "Network or server error. Please try again");
        setLoading(false);
        return;
      }

      // Success
      if (data && data.success === true) {
        toast.success("Message sent successfully!", {
          description: "I'll get back to you soon!",
        });
        formRef.current?.reset();
        setServiceType("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error(
        "Unable to send message. Please check your internet connection.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full space-y-4">
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
            <SelectItem value="New Website">New Website</SelectItem>
            <SelectItem value="Website Re-design">Website Re-design</SelectItem>
            <SelectItem value="Graphic Design (flyers .etc)">
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
