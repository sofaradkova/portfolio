'use client';

import { motion } from 'framer-motion';
import { EmployerCard, Footer, Navbar, TitleText, BodyText } from '../../components';

import { employees } from '../../constants';
import { fadeIn, staggerContainer } from '../../utils/motion';

const Page = () => (
  <div className="overflow-hidden bg-secondary-white">
    <Navbar />
    <TitleText title="Meet Our Team" textStyles="text-center text-main-brown mt-[-20px]" />
    <div className="flex justify-center mb-[100px]">
      <div className="grid grid-cols-3 gap-6 px-6 mt-[50px]">
        {employees.map((employee, index) => (
          <EmployerCard
            key={employee.name}
            index={index}
            {...employee}
          />
        ))}
      </div>
    </div>
    <TitleText title="Our Story" textStyles="text-center text-main-brown mt-[5px] mb-[20px]" />
    <BodyText title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras  parturient montes, nascetur ridiculus mus. Donec quam felis, Integer tincidunt. Cras  parturient montes, nascetur ridiculus mus. Donec quam felis," textStyles="text-center text-[16px] px-[120px]" />
    <BodyText title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium." textStyles="text-center text-[16px] px-[120px] mt-[10px]" />
    <Footer />
  </div>
);

export default Page;

