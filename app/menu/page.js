'use client';

import { Footer, Navbar, SandwichMenu, TitleText, SlideInDarkButton } from '../../components';
import { Customize } from '../../sections';
import { fullMenu } from '../../constants';

const Page = () => (
  <div className="overflow-hidden bg-secondary-white flex justify-center flex-col mx-auto w-full">
    <Navbar />
    <TitleText title={<p>Sandwiches</p>} textStyles="text-center text-main-brown mt-[-40px]" />
    <SandwichMenu menu={fullMenu} />
    <a href="https://order.toasttab.com/online/everything-bagels-durham-530-foster-st#!/order" target="_blank" rel="noreferrer">
      <SlideInDarkButton title="Order Now" buttonStyle="bg-light-brown mt-[50px]" />
    </a>
    <Customize />
    <Footer />
  </div>
);

export default Page;
