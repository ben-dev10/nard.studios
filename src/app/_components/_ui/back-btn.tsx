"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackBTN() {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} className="h-10 rounded-[10px] !px-4">
      <ArrowLeft />
      Go back
    </Button>
  );
}
