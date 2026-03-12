"use client";

import Nav from "@/components/Nav";
import Image from "next/image";

interface LinkItem {
  name: string;
  url: string;
}

export default function LinksPage() {

  const links: LinkItem[] = [
    // HIER DEINE LINKS EINFÜGEN
    { name: "YouTube", url: "https://www.youtube.com/@TomkePlays" },
    { name: "Instagram", url: "https://www.instagram.com/TomkePlays" },
    { name: "Twitter", url: "https://twitter.com" },
  ];

  function getFavicon(url: string) {
    try {
      const domain = new URL(url).origin;
      return domain + "/favicon.ico";
    } catch {
      return "/favicon.ico";
    }
  }

  return (
    <>
      <Nav />

      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Links</h1>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={getFavicon(link.url)}
                alt="logo"
                width={32}
                height={32}
              />

              <span className="text-lg font-medium">
                {link.name}
              </span>
            </a>
          ))}
        </div>

      </main>
    </>
  );
}