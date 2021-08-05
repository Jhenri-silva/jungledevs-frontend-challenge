import Hero from '@c/hero'
import Footer from '@c/footer'
import Feature from '@c/feature'

import { Meta } from '@/layout/Meta'

import { AppConfig } from '@/utils/AppConfig'

const Home = () => (
    <div className="antialiased text-gray-600">
        <Meta title={AppConfig.title} description={AppConfig.description} />
        <Hero />
        <Feature />
        <Footer />
    </div>
)

export default Home
