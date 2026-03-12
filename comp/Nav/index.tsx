"use client";

import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">
          Willkommen auf TomkePlays.de
        </h1>

        <p>
          Das ist die Startseite deiner Website.
        </p>
      </main>
    </>
  );
}