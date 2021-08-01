import { AppConfig } from "@/utils/AppConfig";
import ImageSection1 from "@/assets/ImageSection1.png";
import Image from "next/image";

export default function MainSection() {
  return (
    <section className="drop-shadow flex justify-center items-center flex-col-reverse sm:flex-row">
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
    </section>
  );
}
