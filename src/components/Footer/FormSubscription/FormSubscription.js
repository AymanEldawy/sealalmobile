import { Button } from "@/components/Global/Button/Button";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { Social } from "../Social";

const FormSubscription = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-secondary p-8 mt-12">
      <div className="container">
        <div className="flex gap-8 items-center justify-between">
          <div className="">
            <h3 className="font-semibold text-2xl text-white">{fetchWord("form_subscribe", lang)}</h3>
            <p className="text-white text-xs font-extralight">{fetchWord('form_subscribe_msg', lang)}</p>
          </div>
          <form className="rounded-3xl overflow-hidden bg-white flex shadow flex-1 max-w-xl">
            <input
              type="email"
              placeholder={fetchWord("your_email", lang)}
              className="bg-transparent flex-1 text-xs text-gray-500 px-6 capitalize"
            />
            <Button classes="!p-3 !px-8 hover:!px-10 duration-200 !text-xs !rounded-none">{fetchWord('subscribe', lang)}</Button>
          </form>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default FormSubscription;
