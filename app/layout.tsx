"use client";

import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <SessionProvider>
          <Nav />       {/* useSession in Nav funktioniert jetzt */}
          {children}    {/* der Seiteninhalt, z. B. Home oder Links */}
        </SessionProvider>
      </body>
    </html>
  );
}