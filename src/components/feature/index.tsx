import React from "react";
import FormSection from "./formSection";
import MainSection from "./mainSection";
import PaymentSection from "./paymentSection";
import FurtherInfoSection from "./furtherInfoSection";

export default function Feature() {
  return (
    <main className="bg-brand-background">
      <article>
        <MainSection />
      </article>
      <article>
        <FormSection />
      </article>
      <article>
        <PaymentSection />
      </article>
      <article>
        <FurtherInfoSection />
      </article>
    </main>
  );
}
