'use client';

export const DarkButton = ({ title, buttonStyle }) => (
  <button type="button" className={`text-base rounded-full bg-main-brown px-[23.5px] py-[13px] text-secondary-white hover:bg-secondary-white hover:text-light-brown border-light-brown border ${buttonStyle}`}>
    {title}
  </button>
);

export const LightButton = ({ title, buttonStyle }) => (
  <button type="button" className={`text-base rounded-full border border-light-brown px-[23.5px] py-[13px] text-main-brown hover:bg-light-brown hover:text-secondary-white ${buttonStyle}`}>
    {title}
  </button>
);
