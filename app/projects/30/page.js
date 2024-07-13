'use client';

import { ProjectX } from '../../../sections';
import { projects3 } from '../../../constants';
import { Navbar } from '../../../components';

const Page = () => (
  <div className="overflow-hidden bg-background-grey flex flex-col items-center justify-center">
    <Navbar />
    <ProjectX {...projects3[0]} />
  </div>
);

export default Page;
