import { Button } from "@/components/Global/Button/Button";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

const FormSubscription = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div>
      <h3 className="mb-6">{fetchWord("form_subscribe", lang)}</h3>
      <form className="w-full p-2 bg-white flex rounded-md shadow">
        <input
          type="email"
          placeholder={fetchWord("email", lang)}
          className="bg-transparent flex-1 text-gray-500"
        />
        <Button classes="!p-3 !px-6">{fetchWord('join', lang)}</Button>
      </form>
    </div>
  );
};

export default FormSubscription;
