import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import SectionTitle from "../Global/SectionTitle/SectionTitle";
import { previousWorks } from "@/data/dummyData";
import TimeLineCard from "./TimeLineCard/TimeLineCard";

const ProviderWorksTimeLine = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="">
      <h2 className="text-2xl capitalize text-primary font-medium mb-4">
        {fetchWord("my_works", lang)}
      </h2>
      <div className="">
        {previousWorks?.map((work) => (
          <TimeLineCard key={work?.comment} work={work} />
        ))}
      </div>
    </div>
  );
};

export default ProviderWorksTimeLine;
