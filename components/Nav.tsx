"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Für den aktiven Link-Status
import { useSession, signOut } from "next-auth/react";
import Logo from "@/public/Logo.png";

export default function Nav() {
  const { status, data: session } = useSession();
  const pathname = usePathname(); // Erkennt, auf welcher Seite du bist

  const ADMIN_ID = "cmmj98qgi0000rq24gmwmx125";
  const isAdmin = session?.user?.id === ADMIN_ID;

  return (
    // bg-white/80 + backdrop-blur sorgt für den edlen Milchglas-Effekt beim Scrollen
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-1 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">

        {/* LINKER BLOCK (Logo & Name) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 transition-transform active:scale-95">

          {/* LOGO CONTAINER */}
          <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="/Logo.png" // WICHTIG: In Next.js reicht "/Dateiname" für den public-Ordner
              alt="TomkePlays Logo"
              width={40}      // Feste Breite statt 'fill' (behebt oft Anzeige-Fehler)
              height={40}
              className="object-contain drop-shadow-md"
              priority       // Sorgt dafür, dass das Logo sofort geladen wird
            />
          </div>

          {/* TEXT BEREICH */}
          <span className="text-2xl font-black tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
            TomkePlays<span className="text-blue-600">.de</span>
          </span>
        </Link>

        {/* MITTE - Alles in einer Reihe durch flex-row */}
        <div className="hidden md:flex flex-row items-center justify-center text-[15px] uppercase tracking-widest font-black mx-auto">
          <Link
            href="/"
            className={`transition-all duration-200 hover:scale-110 ${pathname === "/" ? "text-blue-600" : "text-slate-900 hover:text-blue-500"}`}
          >
            Home
          </Link>

          <span className="text-slate-200 font-thin mx-8 select-none">|</span>

          <Link
            href="/shop"
            className={`transition-all duration-200 hover:scale-110 ${pathname === "/shop" ? "text-blue-600" : "text-slate-900 hover:text-blue-500"}`}
          >
            Shop
          </Link>

          <span className="text-slate-200 font-thin mx-8 select-none">|</span>

          <Link
            href="/links"
            className={`transition-all duration-200 hover:scale-110 ${pathname === "/links" ? "text-blue-600" : "text-slate-900 hover:text-blue-500"}`}
          >
            Links
          </Link>

          {isAdmin && (
            <>
              <span className="text-slate-200 font-thin mx-8 select-none">|</span>
              <Link
                href="/admin-tools"
                className={`transition-all duration-200 hover:scale-110 ${pathname === "/admin-tools" ? "text-blue-600" : "text-slate-900 hover:text-blue-500"}`}
              >
                Admin Tools
              </Link>
            </>
          )}
        </div>


        {/* RECHTS (User - Pill Design für die Buttons) */}
        <div className="flex items-center gap-5 shrink-0">
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">
              <span className="hidden lg:inline text-sm font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="px-5 py-2 bg-red-600 text-white text-sm font-black rounded-full hover:bg-red-700 shadow-md shadow-red-200 transition-all active:scale-95 flex items-center justify-center"
              >
                Sign out
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="px-4 py-2 text-slate-600 text-sm font-bold hover:text-black transition">
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
