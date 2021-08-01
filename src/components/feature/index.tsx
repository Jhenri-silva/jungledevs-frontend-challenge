import React from "react";
import ImageSection1 from "@/assets/ImageSection1.png";
import Image from "next/image";
import { AppConfig } from "@/utils/AppConfig";

export default function Feature() {
  return (
    <main className="bg-brand-background">
      <section className="drop-shadow">
        <article className="flex justify-center items-center flex-col-reverse sm:flex-row">
          <div className="flex flex-col max-w-lg m-8 items-center sm:items-start drop-shadow">
            <h2 className="text-medium text-gray-title">
              {AppConfig.section_title}
            </h2>
            <span className="my-4 text-gray-description text-center sm:text-left ">
              {AppConfig.section_description}
            </span>
            <span className="underline text-brand-secondary">
              {AppConfig.section_link_text}
            </span>
          </div>
          <Image src={ImageSection1} />
        </article>
      </section>
    </main>
  );
}
