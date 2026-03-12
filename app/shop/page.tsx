"use client"

import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Image from "next/image";
import Logo from "@/public/Logo.png"; // Testbild aus public

interface ShopItem {
  name: string;
  price: string; // z.B. "10.00"
  image: any; // Image aus public
}

const shopItems: ShopItem[] = [
//  {
    //name: "Mein Neues Produkt",
    //price: 9.99,
    //image: "/neuesBild.png",
//  },
];

const ShopPage: React.FC = () => {
  return (
    <div className="pt-24 px-6">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shopItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
          >
            {/* Bild oben */}
            <Image src={item.image} alt={item.name} width={200} height={200} className="object-cover rounded-t-lg" />

            {/* Name */}
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>

            {/* Preis */}
            <p className="mt-1 font-bold">{item.price} €</p>

            {/* PayPal Button */}
            <div className="mt-2 w-full">
              <PayPalButtons
                style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: { value: item.price },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert("Zahlung erfolgreich von " + details.payer.name.given_name);
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

// ---------------------------------------------------------
// Beispiel-Kachel zum Kopieren:
// ---------------------------------------------------------
// <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
//   <Image src={Logo} alt="Produkt Name" width={200} height={200} className="object-cover rounded-t-lg" />
//   <h2 className="mt-2 text-lg font-semibold">Produkt Name</h2>
//   <p className="mt-1 font-bold">10.00 €</p>
//   <div className="mt-2 w-full">
//     <PayPalButtons ... />
//   </div>
// </div>