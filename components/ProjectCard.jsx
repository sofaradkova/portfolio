'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  ThemeProvider,
} from '@material-tailwind/react';
import Link from 'next/link';

export const ProjectCard = ({ name, role, photo, index, section }) => {
  const theme = {
    card: {
      defaultProps: {
        variant: 'filled',
        color: 'white',
        shadow: true,
        className: '',
      },
      valid: {
        variants: ['filled', 'gradient'],
        colors: [
          'transparent',
          'white',
          'blue-gray',
          'gray',
          'brown',
          'deep-orange',
          'orange',
          'amber',
          'yellow',
          'lime',
          'light-green',
          'green',
          'teal',
          'cyan',
          'light-blue',
          'blue',
          'indigo',
          'deep-purple',
          'purple',
          'pink',
          'red',
        ],
      },
      styles: {
        base: {
          initial: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'flex-col',
            backgroundClip: 'bg-clip-border',
            borderRadius: 'rounded-xl',
          },
          shadow: {
            boxShadow: 'shadow-md',
          },
        },
        variants: {
          filled: {
            transparent: {
              backgroud: 'bg-transparent',
              color: 'text-gray-700',
              shadow: 'shadow-none',
            },
            white: {
              backgroud: 'bg-white',
              color: 'text-gray-700',
            },
            'blue-gray': {
              backgroud: 'bg-blue-gray-500',
              color: 'text-white',
              shadow: 'shadow-blue-gray-500/40',
            },
            gray: {
              backgroud: 'bg-[#f1f5f9]',
              color: 'text-white',
              shadow: 'shadow-[#d9dde0]',
            },
            brown: {
              backgroud: 'bg-brown-500',
              color: 'text-white',
              shadow: 'shadow-brown-500/40',
            },
            'deep-orange': {
              backgroud: 'bg-deep-orange-500',
              color: 'text-white',
              shadow: 'shadow-deep-orange-500/40',
            },
            orange: {
              backgroud: 'bg-orange-500',
              color: 'text-white',
              shadow: 'shadow-orange-500/40',
            },
            amber: {
              backgroud: 'bg-amber-500',
              color: 'text-gray-700',
              shadow: 'shadow-amber-500/40',
            },
            yellow: {
              backgroud: 'bg-yellow-500',
              color: 'text-gray-700',
              shadow: 'shadow-yellow-500/40',
            },
            lime: {
              backgroud: 'bg-lime-500',
              color: 'text-gray-700',
              shadow: 'shadow-lime-500/40',
            },
            'light-green': {
              backgroud: 'bg-light-green-500',
              color: 'text-white',
              shadow: 'shadow-light-green-500/40',
            },
            green: {
              backgroud: 'bg-green-500',
              color: 'text-white',
              shadow: 'shadow-green-500/40',
            },
            teal: {
              backgroud: 'bg-teal-500',
              color: 'text-white',
              shadow: 'shadow-teal-500/40',
            },
            cyan: {
              backgroud: 'bg-cyan-500',
              color: 'text-white',
              shadow: 'shadow-cyan-500/40',
            },
            'light-blue': {
              backgroud: 'bg-light-blue-500',
              color: 'text-white',
              shadow: 'shadow-light-blue-500/40',
            },
            blue: {
              backgroud: 'bg-blue-500',
              color: 'text-white',
              shadow: 'shadow-blue-500/40',
            },
            indigo: {
              backgroud: 'bg-indigo-500',
              color: 'text-white',
              shadow: 'shadow-indigo-500/40',
            },
            'deep-purple': {
              backgroud: 'bg-deep-purple-500',
              color: 'text-white',
              shadow: 'shadow-deep-purple-500/40',
            },
            purple: {
              backgroud: 'bg-purple-500',
              color: 'text-white',
              shadow: 'shadow-purple-500/40',
            },
            pink: {
              backgroud: 'bg-pink-500',
              color: 'text-white',
              shadow: 'shadow-pink-500/40',
            },
            red: {
              backgroud: 'bg-red-500',
              color: 'text-white',
              shadow: 'shadow-red-500/40',
            },
          },
        },
      },
    },
    chip: {
      defaultProps: {
        variant: 'filled',
        size: 'md',
        color: 'blue',
        icon: undefined,
        open: true,
        onClose: undefined,
        action: undefined,
        animate: {
          unmount: {},
          mount: {},
        },
        className: '',
      },
      valid: {
        variants: ['filled', 'gradient', 'outlined', 'ghost'],
        sizes: ['sm', 'md', 'lg'],
        colors: [
          'blue-gray',
          'gray',
          'brown',
          'deep-orange',
          'orange',
          'amber',
          'yellow',
          'lime',
          'light-green',
          'green',
          'teal',
          'cyan',
          'light-blue',
          'blue',
          'indigo',
          'deep-purple',
          'purple',
          'pink',
          'red',
        ],
      },
      styles: {
        base: {
          chip: {
            position: 'relative',
            display: 'grid',
            placeItems: 'items-center',
            fontFamily: 'font-sans',
            fontWeight: 'font-bold',
            textTransform: 'uppercase',
            lineHeight: 'leading-none',
            whiteSpace: 'whitespace-nowrap',
            userSelect: 'select-none',
          },
          action: {
            position: '!absolute',
            top: 'top-2/4',
            right: 'right-1',
            translate: '-translate-y-2/4',
            mx: 'mx-px',
            rounded: 'rounded-md',
          },
          icon: {
            position: 'absolute',
            top: 'top-2/4',
            translate: '-translate-y-2/4',
          },
        },
        sizes: {
          sm: {
            chip: {
              py: 'py-1',
              px: 'px-2',
              fontSize: 'text-xs',
              borderRadius: 'rounded-md',
            },
            action: {
              width: 'w-4',
              height: 'h-4',
            },
            icon: {
              width: 'w-4',
              height: 'h-4',
              left: 'left-1',
            },
          },
          md: {
            chip: {
              py: 'py-1.5',
              px: 'px-3',
              fontSize: 'text-xs',
              borderRadius: 'rounded-lg',
            },
            action: {
              width: 'w-5',
              height: 'h-5',
            },
            icon: {
              width: 'w-5',
              height: 'h-5',
              left: 'left-1.5',
            },
          },
          lg: {
            chip: {
              py: 'py-2',
              px: 'px-4',
              fontSize: 'text-xs',
              borderRadius: 'rounded-lg',
            },
            action: {
              width: 'w-6',
              height: 'h-6',
            },
            icon: {
              width: 'w-6',
              height: 'h-6',
              left: 'left-1.5',
            },
          },
        },
        variants: {
          filled: {
            'blue-gray': {
              backgroud: 'bg-blue-gray-500',
              color: 'text-white',
            },
            gray: {
              backgroud: 'bg-[#64748B]',
              color: 'text-[#f1f5f9]',
            },
            brown: {
              backgroud: 'bg-brown-500',
              color: 'text-white',
            },
            'deep-orange': {
              backgroud: 'bg-deep-orange-500',
              color: 'text-',
            },
            orange: {
              backgroud: 'bg-orange-500',
              color: 'text-white',
            },
            amber: {
              backgroud: 'bg-amber-500',
              color: 'text-black',
            },
            yellow: {
              backgroud: 'bg-yellow-500',
              color: 'text-black',
            },
            lime: {
              backgroud: 'bg-lime-500',
              color: 'text-black',
            },
            'light-green': {
              backgroud: 'bg-light-green-500',
              color: 'text-white',
            },
            green: {
              backgroud: 'bg-green-500',
              color: 'text-white',
            },
            teal: {
              backgroud: 'bg-teal-500',
              color: 'text-white',
            },
            cyan: {
              backgroud: 'bg-cyan-500',
              color: 'text-white',
            },
            'light-blue': {
              backgroud: 'bg-light-blue-500',
              color: 'text-white',
            },
            blue: {
              backgroud: 'bg-blue-500',
              color: 'text-white',
            },
            indigo: {
              backgroud: 'bg-indigo-500',
              color: 'text-white',
            },
            'deep-purple': {
              backgroud: 'bg-deep-purple-500',
              color: 'text-white',
            },
            purple: {
              backgroud: 'bg-purple-500',
              color: 'text-white',
            },
            pink: {
              backgroud: 'bg-pink-500',
              color: 'text-white',
            },
            red: {
              backgroud: 'bg-red-500',
              color: 'text-white',
            },
          },
          outlined: {
            'blue-gray': {
              border: 'border border-blue-gray-500',
              color: 'text-blue-gray-700',
            },
            gray: {
              border: 'border border-[#64748B]',
              color: 'text-[#64748B]',
            },
            brown: {
              border: 'border border-brown-500',
              color: 'text-brown-700',
            },
            'deep-orange': {
              border: 'border border-deep-orange-500',
              color: 'text-deep-orange-700',
            },
            orange: {
              border: 'border border-orange-500',
              color: 'text-orange-700',
            },
            amber: {
              border: 'border border-amber-500',
              color: 'text-amber-700',
            },
            yellow: {
              border: 'border border-yellow-500',
              color: 'text-yellow-700',
            },
            lime: {
              border: 'border border-lime-500',
              color: 'text-lime-700',
            },
            'light-green': {
              border: 'border border-light-green-500',
              color: 'text-light-green-700',
            },
            green: {
              border: 'border border-green-500',
              color: 'text-green-700',
            },
            teal: {
              border: 'border border-teal-500',
              color: 'text-teal-700',
            },
            cyan: {
              border: 'border border-cyan-500',
              color: 'text-cyan-700',
            },
            'light-blue': {
              border: 'border border-light-blue-500',
              color: 'text-light-blue-700',
            },
            blue: {
              border: 'border border-blue-500',
              color: 'text-blue-700',
            },
            indigo: {
              border: 'border border-indigo-500',
              color: 'text-indigo-700',
            },
            'deep-purple': {
              border: 'border border-deep-purple-500',
              color: 'text-deep-purple-700',
            },
            purple: {
              border: 'border border-purple-500',
              color: 'text-purple-700',
            },
            pink: {
              border: 'border border-pink-500',
              color: 'text-pink-700',
            },
            red: {
              border: 'border border-red-500',
              color: 'text-red-700',
            },
          },
          ghost: {
            'blue-gray': {
              backgroud: 'bg-blue-gray-500/20',
              color: 'text-blue-gray-900',
            },
            gray: {
              backgroud: 'bg-[#d9dde0]',
              color: 'text-main-black',
            },
            brown: {
              backgroud: 'bg-brown-500/20',
              color: 'text-brown-900',
            },
            'deep-orange': {
              backgroud: 'bg-deep-orange-500/20',
              color: 'text-deep-orange-900',
            },
            orange: {
              backgroud: 'bg-orange-500/20',
              color: 'text-orange-900',
            },
            amber: {
              backgroud: 'bg-amber-500/20',
              color: 'text-amber-900',
            },
            yellow: {
              backgroud: 'bg-yellow-500/20',
              color: 'text-yellow-900',
            },
            lime: {
              backgroud: 'bg-lime-500/20',
              color: 'text-lime-900',
            },
            'light-green': {
              backgroud: 'bg-light-green-500/20',
              color: 'text-light-green-900',
            },
            green: {
              backgroud: 'bg-green-500/20',
              color: 'text-green-900',
            },
            teal: {
              backgroud: 'bg-teal-500/20',
              color: 'text-teal-900',
            },
            cyan: {
              backgroud: 'bg-cyan-500/20',
              color: 'text-cyan-900',
            },
            'light-blue': {
              backgroud: 'bg-light-blue-500/20',
              color: 'text-light-blue-900',
            },
            blue: {
              backgroud: 'bg-blue-500/20',
              color: 'text-blue-900',
            },
            indigo: {
              backgroud: 'bg-indigo-500/20',
              color: 'text-indigo-900',
            },
            'deep-purple': {
              backgroud: 'bg-deep-purple-500/20',
              color: 'text-deep-purple-900',
            },
            purple: {
              backgroud: 'bg-purple-500/20',
              color: 'text-purple-900',
            },
            pink: {
              backgroud: 'bg-pink-500/20',
              color: 'text-pink-900',
            },
            red: {
              backgroud: 'bg-red-500/20',
              color: 'text-red-900',
            },
          },
        },
      },
    },
  };

  return (
    <Link href={`/projects/${section}${index}`}>
      <ThemeProvider value={theme}>
        <Card className="w-{400px} bg-[#f1f5f9]" color="gray">
          <CardHeader floated={false} className="h-80">
            <img src={photo} alt="person" />
          </CardHeader>
          <CardBody className="flex flex-col text-center items-center">
            <Typography className="font-bold font-title text-[24px] text-main-black max-w-lg">
              {name}
            </Typography>
            <div className="flex font-body justify-center gap-2 px-6 mt-[30px]">
              {role.map((skill) => (
                <Chip
                  value={skill}
                  variant="ghost"
                  color="gray"
                  className="rounded-full font-title"
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </ThemeProvider>
    </Link>
  );
};
