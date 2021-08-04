import { AppConfig } from "@/utils/AppConfig";
import { TextField, Button } from "..";

export default function FormSection() {
  return (
    <section className="text-gray-title text-center mx-8">
      <h3 className="font-medium my-4">{AppConfig.call_to_action_title}</h3>
      <span>{AppConfig.call_to_action_description}</span>
      <div className="my-10 flex justify-center">
        <form className="grid grid-rows-auto gap-2 sm:flex sm:flex-row">
          <TextField id="username" type="text" placeholder="Your Username" />
          <TextField id="email" type="text" placeholder="Your Email" />
          <Button>Send</Button>
        </form>
      </div>
    </section>
  );
}
