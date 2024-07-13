'use client';

import { Typography, Chip, Button } from '@material-tailwind/react';

const ProjectX = ({ name, role, photo, description, link, linkHeader }) => (
  <section className="px-16 pb-20 h-full">
    <div className="mx-auto max-w-screen-md">
      <img
        src={photo}
        alt="project preview"
        className="mb-4 h-80 w-full rounded-xl object-cover"
      />
      <div className="flex justify-between mt-[30px]">
        <div className="flex gap-2">
          {role.map((skill) => (
            <Chip value={skill} variant="ghost" className="rounded-full" color="gray" />
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <Button variant="text" size="sm" color="gray" className="flex items-center gap-2 rounded-full">
            {`${linkHeader}`}{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </div>
      <Typography
        variant="h2"
        color="blue-gray"
        className="my-4 font-black text-4xl !leading-snug"
      >
        {name}
      </Typography>
      <Typography className="font-normal !text-gray-600">
        {description}
      </Typography>
    </div>
  </section>
);

export default ProjectX;
