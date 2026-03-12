// app/links/page.tsx
import React from "react";

interface LinkItem {
  name: string;
  url: string;
}

const links: LinkItem[] = [
  { name: "Discord", url: "https://discord.gg/Dfr7wuXvKD" },
  { name: "YouTube", url: "https://www.youtube.com/@TomkePlays" },
  { name: "Website", url: "https://tomkeplays.de" },
];

const LinksPage: React.FC = () => {
  return (
    <div className="pt-24 px-6">
      <h1 className="text-3xl font-bold mb-6">Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-24 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition-colors text-lg font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;