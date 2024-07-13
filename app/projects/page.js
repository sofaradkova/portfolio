'use client';

import { Projects1, Projects2, Projects3, AboutMe } from '../../sections';

const Page = () => (
  <div className="overflow-hidden bg-background-grey flex flex-col items-center justify-center gap-32">
    <AboutMe />
    <Projects1 />
    <Projects2 />
    <Projects3 />
  </div>
);

export default Page;
