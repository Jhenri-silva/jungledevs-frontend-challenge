import TextField from '@c/textFieldInput'
import { AppConfig } from '@/utils/AppConfig'
import Button from '@c/button'
import { useState } from 'react'
import postNewsLetter from '@/post/newsletter'
import Loading from '@c/loadingSpin'

export default function FormSection() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [loading, setLoading] = useState(false)

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e: any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let timeout
        clearTimeout(timeout)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000)

        // TODO: REFACTOR POST
        try {
            postNewsLetter({ name, email })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section className="text-gray-title text-center mx-8">
            <h3 className="font-medium my-4">
                {AppConfig.call_to_action_title}
            </h3>
            <span>{AppConfig.call_to_action_description}</span>
            <div className="my-10 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex sm:flex-row flex-col w-full justify-center"
                >
                    <TextField
                        onChange={handleNameChange}
                        id="username"
                        type="text"
                        placeholder="Your Username"
                    />
                    <TextField
                        onChange={handleEmailChange}
                        id="email"
                        type="text"
                        placeholder="Your Email"
                    />
                    <div className="m-2">
                        <Button type="submit">Send</Button>
                    </div>
                </form>
            </div>
            {loading ? <Loading /> : <></>}
        </section>
    )
}
