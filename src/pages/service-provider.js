import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { InProgressIcon, MyOfferIcon, NewOrderIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const tabs = [
  { icon: <NewOrderIcon />, name: "new_orders" },
  { icon: <MyOfferIcon />, name: "my_offers" },
  { icon: <InProgressIcon />, name: "in_progress" },
];
const ServiceProvider = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <BannerTitle title={fetchWord("service_provider", lang)} />
      <div className="shadow-md">
        <div className="container rounded-tl-xl">
          <TabsList
            list={tabs}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            containerClassName="justify-around "
            activeClassName="border-2 border-secondary ltr:rounded-tl-xl rtl:rounded-tr-xl ltr:rounded-br-xl rtl:rounded-bl-xl"
            itemClassName="!p-4 text-center justify-center capitalize"
          />
        </div>
      </div>
      <TabsContent>
        </TabsContent>
    </Layout>
  );
};

export default ServiceProvider;
