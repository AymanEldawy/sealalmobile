import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

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
  activeTab
}) => {

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
          {keyName ? item?.[keyName] : item}
        </button>
      ))}
    </div>
  );
};

export default TabsList;
