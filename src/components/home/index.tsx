import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { Hero, Banner, Footer, Feature } from "@c/index";

const Home = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Feature />
    <Banner />
    <Footer />
  </div>
);

export default Home;
