import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";

const Terms = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mt-6 flex-col flex gap-4">
      {Array(4)
        .fill(1)
        ?.map((r, index) => (
          <div key={index}>
            <h4 className="mb-2 font-medium"><span className="text-primary">{index+1}-</span> {fetchWord("term_use", lang)}</h4>
            <p className="text-sm text-lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,.
            </p>
          </div>
        ))}
    </div>
  );
};

export default Terms;
