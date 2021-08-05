import ComingSoonSection from './comingSoonSection'
import FormSection from './formSection'
import FurtherInfoSection from './furtherInfoSection'
import MainSection from './mainSection'
import PaymentSection from './paymentSection'

const components = [
    MainSection,
    PaymentSection,
    FormSection,
    FurtherInfoSection,
    ComingSoonSection,
]

Object.freeze(components)

export default function Feature() {
    return (
        <main className="bg-brand-background">
            <section className=" max-w-screen-lg items-center justify-center divide-y > * divide-gray-divider m-auto">
                {components.map((Section) => (
                    <article
                        key={Math.random() * 100}
                        className="justify-self-center sm:py-20 py-8"
                    >
                        <Section />
                    </article>
                ))}
            </section>
        </main>
    )
}
