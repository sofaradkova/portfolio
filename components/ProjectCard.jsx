'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from '@material-tailwind/react';
import Link from 'next/link';

export const ProjectCard = ({ name, role, photo, index, section }) => (
  <Link href={`/projects/${section}${index}`}>
    <Card className="w-{400px} bg-secondary-white">
      <CardHeader floated={false} className="h-80">
        <img src={photo} alt="person" />
      </CardHeader>
      <CardBody className="flex flex-col text-center items-center">
        <Typography variant="h4" className="font-semibold text-main-black max-w-lg">
          {name}
        </Typography>
        <div className="flex justify-center gap-2 px-6 mt-[30px]">
          {role.map((skill) => (
            <Chip value={skill} variant="ghost" className="rounded-full" color="gray" />
          ))}
        </div>
      </CardBody>
    </Card>
  </Link>
);
