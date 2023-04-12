import { AirConIcon, FriggedIcon, GasIcon, MicrowavesIcon, OthersIcon, OvensIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import ServiceContainerBox from "@/components/ServiceContainerBox/ServiceContainerBox";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { services } from "@/data/dummyData";
import React from "react";
import { useState } from "react";

const Services = () => {
  const [activeMainTab, setActiveMainTab] = useState(services?.[0]);
  return (
    <Layout>
      <div className="container">
        <div className="flex relative items-start ">
          <TabsList
            containerClassName="shadow-md py-10 gap-2 h-[100dvh] min-w-[210px] sticky top-0 "
            direction="vertical"
            list={services}
            keyName="name"
            activeClassName="border border-secondary border-l-4 text-primary  border-l-primary"
            getActiveTab={setActiveMainTab}
            activeTab={activeMainTab}
            setActiveTab={setActiveMainTab}
            itemClassName="capitalize font-medium"
            imgClassName="w-10 h-10 object-contain"
          />
          <div className="flex-1 rtl:ml-auto rtl:mr-56">
            <TabsContent activeTabName={activeMainTab?.name}>
              {services?.map((service) => (
                <ServiceContainerBox
                  key={services?.name}
                  tabName={service?.name}
                  service={service}
                />
              ))}
            </TabsContent>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
