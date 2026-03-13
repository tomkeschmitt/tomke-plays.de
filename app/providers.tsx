"use client";

import { SessionProvider } from "next-auth/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <PayPalScriptProvider options={{ clientId: "DEINE_ID" }}>
          {children}
        </PayPalScriptProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
