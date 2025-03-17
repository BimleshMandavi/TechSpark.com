

import Image from 'next/image';

function nav_01() {
  return (
    <div className="w-full h-[42px] bg-[#1700EB] text-white flex justify-between items-center">
      <div className="flex items-center  cursor-pointer">
        <ul className="flex justify-between gap-8">
          <Image
            className="h-[22px] w-[20px]"
            src="/fire.svg"
            alt=""
            width={20}
            height={22}
          />
          <li>Make Your Business Online</li>
          <Image
            className="h-[22px] w-[20px]"
            src="/fire.svg"
            alt=""
            width={20}
            height={22}
          />
          <li>
            Get a professional static website  for @9990 with one
            year of free maintenance.
          </li>
        </ul>
      </div>

      <div className="cursor-pointer">
        <Image
          className="text-white h-[13px] w-[13px]"
          src="/Vector.svg"
          alt=""
          width={13}
          height={13}
        />
      </div>
    </div>
  );
}

export default nav_01