import TextField from '@c/textFieldInput'
import { AppConfig } from '@/utils/AppConfig'
import Button from '@c/button'

export default function FormSection() {
    return (
        <section className="text-gray-title text-center mx-8">
            <h3 className="font-medium my-4">
                {AppConfig.call_to_action_title}
            </h3>
            <span>{AppConfig.call_to_action_description}</span>
            <div className="my-10 flex justify-center">
                <form className="flex sm:flex-row flex-col w-full justify-center">
                    <TextField
                        id="username"
                        type="text"
                        placeholder="Your Username"
                    />
                    <TextField
                        id="email"
                        type="text"
                        placeholder="Your Email"
                    />
                    <div className="m-2">
                        <Button>Send</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
