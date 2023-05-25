import { GlobalOptions } from "@/context/GlobalOptions";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { CartIcon, CategoriesIcon, HomeIcon, BarsIcon } from "../Icons";
import Image from "next/image";

const FixedBottomMenu = () => {
  const { cartLength, setOpenDrawer } = useContext(GlobalOptions)
  const router = useRouter()
  console.log(router)
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white p-4 flex items-center justify-around max-w-[575px] shadow-lg border-t-2 border-gray-100 z-50">
      <Link href='/' className={`${router?.pathname == '/' ? 'menu-bottom-active-link' : ''}`}>
        <HomeIcon className="text-black" />
      </Link>
      <Link href='/categories' className={`${router?.pathname == '/categories' ? 'menu-bottom-active-link' : ''}`}>
        <CategoriesIcon className="text-black" />
      </Link>
      <Link href='/cart' className={`${router?.pathname == '/cart' ? 'menu-bottom-active-link' : ''} relative`}>
        <CartIcon className="text-black" />
        <span className="absolute -top-1 ltr:right-0 rtl:left-0 bg-red-500 text-white text-xs px-[2px] rounded-md">{cartLength}</span>
      </Link>
      <a href="https://sealal-shipping.vercel.app/">
        <Image src="/images/express-logo.svg" alt="sealal express" height={25} width={45} />
      </a>
      <button onClick={() => setOpenDrawer(p => !p)}><BarsIcon className="text-black" /></button>
    </div>
  );
};

export default FixedBottomMenu;
