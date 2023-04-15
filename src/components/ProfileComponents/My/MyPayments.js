import { PaypalIcon, PlusIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext } from "react";

const MyPayments = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex gap-3 items-center bg-white rounded-xl p-6 px-10 text-lead">
        <PaypalIcon />
        Whynot@gmail.com
      </li>
      <li className="flex gap-3 items-center bg-white rounded-xl p-6 px-10 text-lead">
        <Image
          src="/images/Visa.png"
          alt=""
          width={40}
          height={45}
          className="w-12 h-10 object-contain"
        />
        **** **** **** 2564
      </li>
      <li className="flex gap-3 items-center bg-white rounded-xl p-6 px-10 text-lead">
        <Image
          src="/images/mastercard.png"
          alt=""
          width={40}
          height={45}
          className="w-12 h-10 object-contain"
        />
        **** **** **** 2564
      </li>
      <li className="bg-white rounded-xl p-6 px-10">
        <button className="flex gap-4 items-center text-primary font-medium">
          <span className="w-7 h-7 rounded-full flex items-center justify-center border-primary border-2">
            <PlusIcon className="text-primary font-semibold" />
          </span>
          {fetchWord("add_payment", lang)}
        </button>
      </li>
    </ul>
  );
};

export default MyPayments;
