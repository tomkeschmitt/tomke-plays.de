"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-slate-200 px-6 py-4 mt-auto shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-slate-500 text-sm font-medium">
        <span>&copy;</span>
        <span className="mx-2 text-slate-300">&middot;</span>
        <span>{currentYear} TomkePlays</span>
      </div>
    </footer>
  );
}
