"use client";

import React from "react";
import { Youtube, Globe, MessageCircle } from "lucide-react"; // Icons für den Premium-Look

interface LinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  shadow: string;
}

const links: LinkItem[] = [
  {
    name: "Discord",
    url: "https://discord.gg/Dfr7wuXvKD",
    icon: <MessageCircle size={32} />,
    color: "bg-[#5865F2]",
    shadow: "shadow-[0_0_20px_rgba(88,101,242,0.4)]"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TomkePlays",
    icon: <Youtube size={32} />,
    color: "bg-gradient-to-br from-red-600 via-red-500 to-red-400",
    shadow: "shadow-[0_0_20px_rgba(220,38,38,0.4)]"
  },
  {
    name: "Website",
    url: "https://tomkeplays.de",
    icon: <Globe size={32} />,
    color: "bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600",
    shadow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]"
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/30 pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER (Passend zum Admin & Shop Design) */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.3em]">
            Connect
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">
            Social <span className="text-blue-600">Links</span>
          </h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto">
            Werde Teil der Community und verpasse keinen Content mehr.
          </p>
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group relative flex flex-col items-center justify-center h-48 rounded-[2.5rem]
                text-white transition-all duration-500
                hover:-translate-y-3 hover:scale-105
                ${link.color} ${link.shadow}
              `}
            >
              {/* Ein schimmernder Glanz-Effekt im Hintergrund der Karte */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

              {/* ICON */}
              <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {link.icon}
              </div>

              {/* TEXT */}
              <span className="text-xl font-black tracking-widest uppercase">
                {link.name}
              </span>

              {/* Kleiner "Pfeil" Indikator, der beim Hover erscheint */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300">
                <p className="text-[10px] font-black tracking-[0.2em]">Klicken zum Öffnen</p>
              </div>
            </a>
          ))}
        </div>

        {/* ZUSATZ-INFO UNTEN */}
        <div className="mt-20 text-center text-slate-300 text-sm font-medium">
          <p>&copy; · 2026 TomkePlays</p>
        </div>

      </div>
    </div>
  );
};

export default LinksPage;
