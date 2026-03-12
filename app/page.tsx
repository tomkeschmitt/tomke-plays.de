import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50/30 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.3em] animate-fade-in">
            Willkommen im Hub
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Dein Zugang zu <br />
            <span className="text-blue-600">TomkePlays</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Entdecke alle meine Projekte, exklusive Shop-Inhalte und bleib immer 
            auf dem neuesten Stand meiner YouTube-Videos.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LINKS CARD */}
          <Link href="/links" className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Alle Links</h2>
            <p className="text-slate-500 text-sm leading-relaxed">Discord, Socials und Partner-Plattformen auf einen Blick.</p>
          </Link>

          {/* SHOP CARD */}
          <Link href="/shop" className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Plays Shop</h2>
            <p className="text-slate-500 text-sm leading-relaxed">Sichere dir den neusten Merch und exklusive Community-Inhalte.</p>
          </Link>

          {/* YOUTUBE CARD */}
          <a href="https://www.youtube.com/@TomkePlays" target="_blank" rel="noopener noreferrer" className="group p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">YouTube</h2>
            <p className="text-slate-500 text-sm leading-relaxed">Verpasse kein Video mehr und schau dir die neuesten Uploads an.</p>
          </a>

        </div>

        {/* FOOTER-TEXT INFO */}
        <div className="mt-24 pt-12 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-sm font-medium italic">
            © 2026 TomkePlays &middot; Alle Projekte werden mit Liebe entwickelt.
          </p>
        </div>

      </div>
    </main>
  );
}
