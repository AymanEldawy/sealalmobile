import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext } from "react";

const TabsList = ({
  direction,
  list,
  keyName,
  imgClassName,
  iconClassName,
  itemClassName,
  activeClassName,
  containerClassName,
  setActiveTab,
  activeTab,
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div
      className={`flex ${
        direction === "vertical" ? "flex-col" : ""
      }  ${containerClassName}`}
    >
      {list?.map((item, index) => (
        <button
          key={keyName ? item?.[keyName] : item}
          onClick={() => setActiveTab(item)}
          className={`flex items-center gap-3 px-4 py-2 ${itemClassName} ${
            activeTab === item[keyName] || activeTab === item
              ? ` ${activeClassName}`
              : ""
          }`}
        >
          {item?.img ? (
            <Image
              src={item?.img}
              alt={item[keyName]}
              height={60}
              width={80}
              className={imgClassName}
            />
          ) : null}
          {item?.icon ? (
            <span className={iconClassName}>{item?.icon}</span>
          ) : null}
          {keyName ? fetchWord(item?.[keyName], lang) : fetchWord(item, lang)}
        </button>
      ))}
    </div>
  );
};

export default TabsList;
