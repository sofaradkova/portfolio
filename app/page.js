import { Footer, Navbar } from '../components';
import { Sandwiches, Customize, Catering, Hero, About, Finisher } from '../sections';

const Page = () => (
  <div className="overflow-hidden bg-secondary-white">
    <Navbar />
    <Hero />
    <Sandwiches />
    <Customize />
    <Catering />
    <About />
    <Finisher />
    <Footer />
  </div>
);

export default Page;
