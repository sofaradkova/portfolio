'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

export const EmployerCard = ({ name, role, photo }) => (
  <Card className="w-96 bg-secondary-white">
    <CardHeader floated={false} className="h-80">
      <img src={photo} alt="person" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" className="mb-2 text-black font-main">
        {name}
      </Typography>
      <Typography className="font-medium text-black font-main" textGradient>
        {role}
      </Typography>
    </CardBody>
  </Card>
);
