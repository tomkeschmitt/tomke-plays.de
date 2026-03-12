"use client";

import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav-Leiste oben */}
      <Nav />

      {/* Hauptinhalt */}
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Willkommen auf TomkePlays.de
        </h1>

        <p className="mb-6">
          Hier findest du alle wichtigen Informationen und Links.
        </p>

        {/* Links Section */}
        <section id="links-section" className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Links</h2>

          <div className="flex flex-col gap-4">
            {/* Beispiel-Links */}
            <a
              href="https://www.youtube.com/@TomkePlays"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/TomkePlays"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">Instagram</span>
            </a>

            <a
              href="https://twitter.com/TomkePlays"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">Twitter</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}