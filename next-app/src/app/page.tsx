import type { Metadata } from "next";
import CV from "@/Presentation/components/CV";

export const metadata: Metadata = {
  title: "CV - Rémi Girard",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black px-4">
      <CV />
    </main>
  );
}
