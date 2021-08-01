import React from "react";
import ImageSection1 from "@/assets/ImageSection1.png";
import Image from "next/image";
import { AppConfig } from "@/utils/AppConfig";
import { TextField, Button } from "..";

export default function Feature() {
  return (
    <main className="bg-brand-background">
      {/*Share your home, nanny and cost*/}
      <section className="drop-shadow">
        <article className="flex justify-center items-center flex-col-reverse sm:flex-row">
          <div className="flex flex-col max-w-lg m-8 items-center sm:items-start drop-shadow">
            <h2 className="font-medium text-gray-title">
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
      <section className="text-gray-title text-center mx-8">
        <h3 className="font-medium my-4">{AppConfig.call_to_action_title}</h3>
        <span>{AppConfig.call_to_action_description}</span>
        <div className="my-10">
          <form className="grid grid-rows-auto gap-2 sm:flex sm:flex-row">
            <TextField id="username" type="text" placeholder="Your Username" />
            <TextField id="email" type="text" placeholder="Your Email" />
            <Button>Send</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
