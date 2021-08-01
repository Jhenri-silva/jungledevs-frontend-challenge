import React from "react";
import FormSection from "./formSection";
import MainArticle from "./mainArticle";
import PaymentSection from "./paymentSection";

export default function Feature() {
  return (
    <main className="bg-brand-background">
      <MainArticle />
      <FormSection />
      <PaymentSection />
    </main>
  );
}
