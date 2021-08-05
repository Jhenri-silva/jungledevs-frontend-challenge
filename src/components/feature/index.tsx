import ComingSoonSection from './comingSoonSection'
import FormSection from './formSection'
import FurtherInfoSection from './furtherInfoSection'
import MainSection from './mainSection'
import PaymentSection from './paymentSection'

export default function Feature() {
    return (
        <main className="bg-brand-background">
            <section className=" max-w-screen-lg items-center justify-center divide-y > * divide-gray-divider m-auto">
                <article className="justify-self-center sm:py-20 py-8">
                    <MainSection />
                </article>
                <article className="justify-self-center sm:py-20 py-8">
                    <FormSection />
                </article>
                <article className="justify-self-center sm:py-20 py-8">
                    <PaymentSection />
                </article>
                <article className="justify-self-center sm:py-20 py-8">
                    <FurtherInfoSection />
                </article>
                <article className="justify-self-center sm:py-20 py-8">
                    <ComingSoonSection />
                </article>
            </section>
        </main>
    )
}
