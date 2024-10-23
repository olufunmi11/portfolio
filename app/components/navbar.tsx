import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <h1 className=" text-black text-[25px] font-semibold">Funmi Dev!</h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
