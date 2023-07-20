'use client';

const Ingredients = ({ bagel, ingredients, price, index }) => (
  <div className="p-4">
    <div className="relative h-[484px] w-[455px]">
      <img
        src={`${index % 2 ? '/list-right.svg' : '/list-left.svg'}`}
        alt="list"
        className="absolute z-0 object-contain"
      />
      <ul className={`absolute list-disc z-10 text-black text-[16px] top-1/2 left-1/2 w-[261px] ${index % 2 ? '-translate-x-[35%] -translate-y-[40%]' : '-translate-x-[55%] -translate-y-[55%]'}`}>
        {ingredients.map((ingredient) => (
          <li className="leading-[50px]">{ingredient}</li>
        ))}
      </ul>
      <p className={`absolute font-bold z-10 inset-0 text-black ${index % 2 ? 'translate-x-[29%] -translate-y-[5%]' : 'translate-x-[75%] translate-y-[50%]'} rotate-[-27.5deg]`}>{bagel}</p>
      <p className={`absolute font-bold font-numbers text-[48px] text-main-brown z-10 inset-0 ${index % 2 ? 'translate-x-[82%] translate-y-[74.5%]' : 'translate-x-[11.5%] translate-y-[7.5%]'}`}>${price}</p>
    </div>
  </div>
);

export default Ingredients;
