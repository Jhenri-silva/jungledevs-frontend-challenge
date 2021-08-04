import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { Hero, Footer, Feature } from "@c/index";

const Home = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Feature />
    <Footer />
  </div>
);

export default Home;
