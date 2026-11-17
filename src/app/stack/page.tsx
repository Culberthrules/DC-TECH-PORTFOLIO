import type { Metadata } from "next";
import Stack from "@/components/Stack";

export const metadata: Metadata = {
  title: "Stack",
};

export default function StackPage() {
  return (
    <main>
      <Stack />
    </main>
  );
}
