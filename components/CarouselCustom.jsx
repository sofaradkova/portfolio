'use client';

export const CarouselCustom = ({ title, index, options }) => (
  <div className="flex flex-col items-center mt-[120px]">
    <div className="flex items-center justify-center w-[5vw] relative">
      <div className="text-black font-bold font-numbers text-[24px] absolute z-10">{index}</div>
      <img src="/price-badge.svg" alt="badge" className="object-cover absolute z-0" />
    </div>
    <div className="text-black text-[24px] tracking-wide mt-[50px] mb-[30px]">
      {title}
    </div>
    <div className="carousel rounded-box flex gap-[5vw]">
      {options.map((option) => (
        <div className="carousel-item h-[15vw]">
          <img src={option} alt="avocado" className="w-[15vw]" />
        </div>
      ))}
    </div>
  </div>
);
