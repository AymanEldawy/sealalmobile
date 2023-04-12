import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Layout } from "@/components/Layout/Layout";
import OffersGrid from "@/components/OffersGrid/OffersGrid";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { offers } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const tabs = ["current_orders", "previous_orders", "canceled_orders"];
const SingleRequest = () => {
  const { lang } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <Layout>
      <BannerTitle title={fetchWord("my_requests", lang)} />
      <div className="shadow-md">
        <div className="container">
          <TabsList
            containerClassName="justify-around"
            activeClassName="border-2 border-primary"
            itemClassName="!p-4 text-center justify-center flex-1 first:text-green-400 last:text-red-400 tex-black capitalize"
            list={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="bg-[#F6F6F6] pt-4 pb-8">
        <div className="container  ">
          <TabsContent activeTabName={activeTab}>
            <OffersGrid tabName="current_orders" offers={offers} />
            <OffersGrid tabName="previous_orders" offers={offers} previousStage/>
            <OffersGrid tabName="canceled_orders" offers={offers} />
          </TabsContent>
        </div>
      </div>
    </Layout>
  );
};

export default SingleRequest;
