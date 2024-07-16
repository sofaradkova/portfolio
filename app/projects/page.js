'use client';

import { Finisher, Projects1, Projects2, Projects3 } from '../../sections';

const Page = () => (
  <div className="overflow-hidden bg-background-grey flex flex-col items-center justify-center gap-32">
    <Projects1 />
    <Projects2 />
    <Projects3 />
    <Finisher />
  </div>
);

export default Page;
