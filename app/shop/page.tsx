"use client"

import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Logo from "@/public/Logo.png";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-slate-50/30 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.2em]">
            Official Store
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Shop <span className="text-blue-600">System</span>
          </h1>
        </div>

        {/* PRODUKT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


          {/* AB HIER KOPIEREN FÜR EIN NEUES PRODUKT */}

          {/* BIS HIER KOPIEREN (ENDE DES PRODUKTS) */}


        </div>
      </div>
    </div>
  );
}
