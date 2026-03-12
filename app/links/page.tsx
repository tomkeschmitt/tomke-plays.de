import React from "react";

interface LinkItem {
  name: string;
  url: string;
  styles: string;
}

const links: LinkItem[] = [
  { 
    name: "Discord", 
    url: "https://discord.gg/Dfr7wuXvKD",
    styles: "bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-[0_0_15px_rgba(88,101,242,0.4)]" 
  },
  { 
    name: "YouTube", 
    url: "https://www.youtube.com/@TomkePlays",
    // Rot zu Weiß Verlauf am Rand (via-white erzeugt den Effekt)
    styles: "bg-gradient-to-r from-red-600 via-red-500 to-white text-white hover:to-red-500 transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]" 
  },
  { 
    name: "Website", 
    url: "https://tomkeplays.de",
    // Gelb zu Orange Verlauf
    styles: "bg-gradient-to-br from-yellow-400 to-orange-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
  },
];

const LinksPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Social Links</h1>
        <p className="text-slate-500">Verbinde dich mit mir auf allen Plattformen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center h-32 rounded-2xl 
              text-xl font-bold tracking-wide uppercase 
              transform transition-all duration-300 hover:-translate-y-2 hover:scale-105
              ${link.styles}
            `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
