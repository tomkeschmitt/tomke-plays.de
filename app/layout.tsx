"use client";

import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import "./globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <SessionProvider>
          <PayPalScriptProvider options={{ "client-id": "AVFtFUmNYXK0T0_9DHxswaiUzIEOvDr2ZljdUCwTxIK7aJ6DVxuYrimkZ92old5eQCD9-n5NjD2fdXOv" }}>
            <Nav />       {/* Navbar oben */}
            {children}    {/* Seiteninhalt: Home, Links, Shop */}
          </PayPalScriptProvider>
        </SessionProvider>
      </body>
    </html>
  );
}