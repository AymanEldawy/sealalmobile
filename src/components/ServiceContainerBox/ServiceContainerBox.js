import { LanguageContext } from "@/context/LangContext";
import { companies, electrics, serviceProviders } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";
import { useState } from "react";

import SeeMore from "../Global/SeeMore/SeeMore";
import TabsContent from "../Tabs/TabsContent";
import TabsList from "../Tabs/TabsList";
import CompanyCardBox from "./CompanyCardBox";
import ServiceCardBox from "./ServiceCardBox/ServiceCardBox";
import ServiceProviderCard from "./ServiceProviderCard/ServiceProviderCard";

const ServiceContainerBox = ({ service }) => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(electrics?.[0]);
  return (
    <div className=" ml-4 rtl:ml-auto rtl:mr-4">
      <TabsList
        list={electrics}
        keyName="name"
        containerClassName="shadow"
        itemClassName="capitalize flex-1 !py-5 px-4"
        activeClassName="bg-[#F2F2F2]"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabsContent activeTabName={activeTab?.name}>
        {electrics?.map((item) => (
          <div className="" key={item?.name} tabName={item?.name}>
            <ServiceCardBox service={item} />
            <div className="flex justify-between mt-12 mb-4">
              <h2 className="text-primary text-xl capitalize font-medium">
                {" "}
                {fetchWord("service_providers", lang)}
              </h2>
              <SeeMore link=""/> 
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {serviceProviders?.slice(0, 6)?.map((provider, index) => (
                <ServiceProviderCard key={index} provider={provider} />
              ))}
            </div>
            <div className="flex justify-between mt-12 mb-4">
              <h2 className="text-primary text-xl capitalize font-medium">
                {" "}
                {fetchWord("companies", lang)}
              </h2>
             <SeeMore link=""/> 
            </div>
            <div className="overflow-hidden w-full">
              <div className="flex overflow-auto max-w-full">
                {companies?.slice(0,6)?.map((company) => (
                  <CompanyCardBox key={company?.name} company={company} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </TabsContent>
    </div>
  );
};

export default ServiceContainerBox;
