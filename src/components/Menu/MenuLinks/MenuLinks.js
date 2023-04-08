import { links } from "@/data/cardData";
import Link from "next/link";
import React from "react";

const MenuLinks = () => {
  return (
    <ul className="flex gap-5 items-center">
      {links?.map((item) => (
        <li>
          <Link href={item?.link}>{item?.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
