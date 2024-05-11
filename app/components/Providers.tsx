"use client"
import { ReactNode } from "react";

import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://bd-com.vercel.app/stripe/success"
      cancelUrl="https://bd-com.vercel.app/stripe/error"
      currency="BDT"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

//https://bd-com.vercel.app/stripe/success
//https://bd-com.vercel.app/stripe/error

//http://localhost:3000/stripe/success
//http://localhost:3000/stripe/error