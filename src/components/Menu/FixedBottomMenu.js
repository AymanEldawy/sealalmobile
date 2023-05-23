import { GlobalOptions } from "@/context/GlobalOptions";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { CartIcon, CategoriesIcon, HomeIcon, BarsIcon } from "../Icons";
import Image from "next/image";

const menuLinks = [
  { role: "link", path: "/", icon: <HomeIcon className="text-black" /> },
  { role: "link", path: "/categories", icon: <CategoriesIcon className="text-black" /> },
  { role: "link", path: "/cart", icon: <CartIcon className="text-black" /> },
];
const FixedBottomMenu = () => {
  const { cartLength, setOpenDrawer } = useContext(GlobalOptions)
  const router = useRouter()
  console.log(router)
return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white p-4 flex items-center justify-around max-w-[575px] shadow-lg border-t-2 border-gray-100 z-50">
      {menuLinks?.map((item) => (
        <Link href={item?.path} key={item?.path} className={`${router?.pathname == item?.path ? 'menu-bottom-active-link' : ''}`}>
          <span>{item?.icon}</span>
        </Link>
      ))}
      <a href="https://sealal-shipping.vercel.app/">
        <Image src="/images/express-logo.svg" alt="sealal express" height={25} width={45} />
      </a>
      <button onClick={() => setOpenDrawer(p => !p)}><BarsIcon className="text-black" /></button>
    </div>
  );
};

export default FixedBottomMenu;
