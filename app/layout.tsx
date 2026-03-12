"use client";

import { SessionProvider } from "next-auth/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        <SessionProvider>
          <PayPalScriptProvider options={{ "client-id": "AVFtFUmNYXK0T0_9DHxswaiUzIEOvDr2ZljdUCwTxIK7aJ6DVxuYrimkZ92old5eQCD9-n5NjD2fdXOv" }}>

            {/* Dieser Container erzwingt, dass der Footer unten landet */}
            <div className="flex flex-col min-h-screen">
              <Nav />

              {/* flex-grow füllt den Platz zwischen Nav und Footer auf */}
              <main className="flex-grow">
                {children}
              </main>

              <Footer />
            </div>

          </PayPalScriptProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
