import SeeMore from "@/components/Global/SeeMore/SeeMore";
import { ChevronIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import CompanyCardBox from "@/components/ServiceContainerBox/CompanyCardBox";
import ServiceCardBox from "@/components/ServiceContainerBox/ServiceCardBox/ServiceCardBox";
import ServiceContainerBox from "@/components/ServiceContainerBox/ServiceContainerBox";
import ServiceProviderCard from "@/components/ServiceContainerBox/ServiceProviderCard/ServiceProviderCard";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { companies, electrics, serviceProviders, services } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const Services = () => {
  const { lang } = useContext(LanguageContext);
  const [activeMainTab, setActiveMainTab] = useState("");
  const [stage, setStage] = useState(0);

  const changeTab = (tab) => {
    setActiveMainTab(tab);
    setStage(1);
  };
  const goBack = () => {
    setStage(0);
    setActiveMainTab("");
  };
  const newElectrics = electrics?.map((item) => {
    return {
      ...item,
      iconEnd: <ChevronIcon className="h-4 w-4 text-primary" />,
    };
  });
  return (
    <Layout
      handleBack={stage > 0 ? goBack : undefined}
      title={fetchWord("services", lang)}
      full
      mainClassName="!bg-[#F2F2F2] !rounded-none"
      containerClassName="!p-3"
    >
      <div className="container">
        {stage === 0 ? (
          <TabsList
            containerClassName="py-10 gap-4 h-[100dvh] min-w-[210px] sticky top-0 "
            direction="vertical"
            list={newElectrics}
            keyName="name"
            activeClassName="border border-secondary border-l-4 text-primary  border-l-primary"
            getActiveTab={setActiveMainTab}
            activeTab={activeMainTab}
            setActiveTab={changeTab}
            itemClassName="capitalize font-medium whitespace-nowrap !bg-white w-full !p-5 rounded-xl"
            iconEndClassName="block ltr:ml-auto rtl:mr-auto bg-secondary p-2 rounded-full"
          />
        ) : (
          <TabsContent activeTabName={activeMainTab?.name}>
            {electrics?.map((item) => (
              <div className="" key={item?.name} tabName={item?.name}>
                <ServiceCardBox service={item} />
                <div className="flex justify-between mt-12 mb-4">
                  <h2 className="text-primary text-xl capitalize font-medium">
                    {" "}
                    {fetchWord("service_providers", lang)}
                  </h2>
                  
                </div>
                <div className="grid gap-4">
                  {serviceProviders?.slice(0, 6)?.map((provider, index) => (
                    <ServiceProviderCard key={index} provider={provider} />
                  ))}
                </div>
                <div className="flex justify-between mt-12 mb-4">
                  <h2 className="text-primary text-xl capitalize font-medium">
                    {" "}
                    {fetchWord("companies", lang)}
                  </h2>
                  <SeeMore link="" />
                </div>
                <div className="overflow-hidden w-full">
                  <div className="flex overflow-auto max-w-full">
                    {companies?.slice(0, 4)?.map((company) => (
                      <CompanyCardBox key={company?.name} company={company} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        )}
      </div>
    </Layout>
  );
};

export default Services;
