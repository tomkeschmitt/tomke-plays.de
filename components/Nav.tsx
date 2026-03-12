"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Logo from "@/public/Logo.png";

export default function Nav() {
  const { status, data: session } = useSession();

  const ADMIN_ID = "cmmj98qgi0000rq24gmwmx125";
  const isAdmin = session?.user?.id === ADMIN_ID;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-6 py-3">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LINKER BLOCK (Logo) */}
        <div className="flex items-center gap-2 shrink-0">
          <Image src={Logo} alt="Logo" width={32} height={32} />
          <span className="text-2xl font-bold">TomkePlays.de</span>
        </div>

        {/* MITTE */}
        <div className="hidden md:flex items-center justify-center text-lg font-bold mx-auto">
          <Link href="/" className="text-slate-900 hover:text-blue-600 transition">
            Home
          </Link>

          <span className="text-slate-300 font-light mx-10">-|-</span>

          <Link href="/shop" className="text-slate-900 hover:text-blue-600 transition">
            Shop
          </Link>

          <span className="text-slate-300 font-light mx-10">-|-</span>

          <Link href="/links" className="text-slate-900 hover:text-blue-600 transition">
            Links
          </Link>

          {isAdmin && (
            <>
              <span className="text-slate-300 font-light mx-10">-|-</span>
              <Link href="/admin-tools" className="text-slate-900 hover:text-blue-600 transition-all">
                Admin Tools
              </Link>
            </>
          )}
        </div>



        {/* RECHTER BLOCK (User) */}
        <div className="flex items-center gap-4 shrink-0">
          {status === "authenticated" ? (
            <>
              <span className="hidden sm:inline font-medium text-slate-700">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
              >
                Sign out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="px-4 py-2 text-slate-700 font-medium hover:text-black">
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
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
