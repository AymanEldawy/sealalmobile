import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { InProgressIcon, MyOfferIcon, NewOrderIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import NewOrders from "@/components/NewOrders/NewOrders";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext, useState } from "react";

const tabs = [
  { icon: <NewOrderIcon />, name: "new_orders" },
  { icon: <MyOfferIcon />, name: "my_offers" },
  { icon: <InProgressIcon />, name: "in_progress" },
];
const Offers = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { lang } = useContext(LanguageContext);
  return (
    <Layout full mainClassName="!rounded-none bg-[#F6F6F6]" hideBottomMenu>
      {/* <div className="relative">
        <figure className="absolute -top-20 left-1/2 overflow-visible -translate-x-1/2  ">
          <Image
            className="rounded-[50%] object-cover  h-36 w-h-36 border-4 bg-white border-[#F2F2F2] "
            src={provider?.image}
            alt={provider?.name}
            height={150}
            width={150}
          />
        </figure>
      </div> */}

      {/* <BannerTitle title={fetchWord("service_provider", lang)} /> */}
      <div className="shadow-md pt-8">
        <div className="container rounded-tl-xl">
          <TabsList
            list={tabs}
            keyName="name"
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="justify-around !bg-transparent"
            activeClassName="before:absolute before:rounded-md before:bottom-0 before:left-[15%] before:border before:border-primary before:border-4 before:w-[70%]"
            itemClassName="relative text-primary !px-8 !gap-1 flex-col overflow-hidden bg-orange-100 rounded-3xl !p-4 text-center justify-center capitalize"
          />
        </div>
      </div>
      <TabsContent activeTabName={activeTab?.name}>
        <NewOrders tabName="new_orders" />
        <NewOrders tabName="my_offers" layout="my_offers" />
        <NewOrders tabName="in_progress" layout="in_progress" />
      </TabsContent>
    </Layout>
  );
};

export default Offers;
