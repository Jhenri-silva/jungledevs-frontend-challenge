import imageSection5 from "@/assets/imageSection5.svg";
import Image from "next/image";
import { AppConfig } from "@/utils/AppConfig";

export default function comingSoonSection() {
  return (
    <section className="grid grid-row-auto gap-4 text-center max-w-3xl">
      <Image src={imageSection5} />
      <h2 className="font-medium text-gray-title">
        {AppConfig.coming_soon_title}
      </h2>
      <span className="text-gray-title">
        {AppConfig.coming_soon_description}
      </span>
    </section>
  );
}
