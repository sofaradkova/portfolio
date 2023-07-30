'use client';

import { useState } from 'react';

import { Footer, ExploreCard, TitleText, Navbar, DarkButton } from '../../components';
import { exploreWorlds } from '../../constants';

const Page = () => {
  const [active, setActive] = useState('option-2');

  return (
    <div className="overflow-hidden bg-secondary-white">
      <Navbar />
      <div className=" flex flex-col justify-center px-[50px] mx-[8vw]">
        <TitleText title={<p>Vegan Catering</p>} textStyles="text-center text-main-brown" />
        <div className="mt-[40px] flex lg:flex-row flex-col gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <a href="https://order.toasttab.com/online/everything-bagels-durham-530-foster-st#!/order" target="_blank" rel="noreferrer">
          <div className="text-center">
            <DarkButton title="Order Now" buttonStyle="bg-light-brown mt-[40px]" />
          </div>
        </a>
        <TitleText title={<p>Non-Vegan Catering</p>} textStyles="text-center text-main-brown mt-[100px]" />
        <div className="mt-[40px] flex lg:flex-row flex-col gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
      <a href="https://order.toasttab.com/online/everything-bagels-durham-530-foster-st#!/order" target="_blank" rel="noreferrer">
        <div className="text-center">
          <DarkButton title="Order Now" buttonStyle="bg-light-brown mt-[40px]" />
        </div>
      </a>
      <Footer />
    </div>
  );
};

export default Page;

