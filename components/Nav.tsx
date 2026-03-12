"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import Logo from "@/public/Logo.png";

export default function Nav() {
  const { status, data: session } = useSession();

  // Admin-ID aus altem Code
  const ADMIN_ID = "cmmj98qgi0000rq24gmwmx125";
  const isAdmin = session?.user?.id === ADMIN_ID;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-6 py-3">
      <div className="flex items-center max-w-7xl mx-auto w-full">

        {/* LINKS */}
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" width={32} height={32} />
          <span className="text-2xl font-bold">TomkePlays.de</span>
        </div>

        {/* "LEERZEICHEN" zwischen Links und Mitte */}
        {"------------------------------"}

        {/* MITTE */}
        <div className="flex-1 flex justify-center text-lg">
          <Link href="/">Home</Link>{"--------"}
          <Link href="/shop">Shop</Link>{"--------"}
          <Link href="/links">Links</Link>{"--------"}
          {isAdmin && <Link href="/admin-tools">Admin Tools</Link>}
        </div>

        {/* "LEERZEICHEN" zwischen Mitte und Rechts */}
        {"------------------------------"}

        {/* RECHTS */}
        <div className="flex items-center gap-3">
          {status === "authenticated" ? (
            <>
              <span>{session.user?.name}</span>{"------"}
              <button
                onClick={() => signOut()}
                className="px-3 py-1 bg-slate-900 text-white rounded-md"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signup"
                className="px-3 py-1 bg-slate-900 text-white rounded-md"
              >
                Sign up
              </Link>
              {"--------"}
              <Link
                href="/login"
                className="px-3 py-1 bg-slate-900 text-white rounded-md"
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}