import type { Metadata } from "next";
import CV from "@/Presentation/components/CV";

export const metadata: Metadata = {
  title: "CV - Rémi Girard",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black py-8 px-4">
      <CV />
    </main>
  );
}
