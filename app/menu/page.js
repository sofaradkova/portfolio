import { Footer, Navbar } from '../../components';
import { Sandwiches, Customize } from '../../sections';

const Page = () => (
  <div className="overflow-hidden bg-secondary-white">
    <Navbar />
    <Sandwiches />
    <Customize />
    <Footer />
  </div>
);

export default Page;
