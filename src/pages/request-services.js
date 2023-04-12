import BannerTitle from "@/components/BannerTitle/BannerTitle";
import HowItWork from "@/components/HowItWork/HowItWork";
import { Layout } from "@/components/Layout/Layout";
import RequestServicesConfirmation from "@/components/RequestServicesConfirmation/RequestServicesConfirmation";
import RequestServicesForm from "@/components/RequestServicesForm/RequestServicesForm";
import TabsContent from "@/components/Tabs/TabsContent";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

const RequestServices = () => {
  const { lang } = useContext(LanguageContext);
  const [selectTab, setSelectedTab] = useState("confirmation");

  const getValues = (values) => {};
  return (
    <Layout>
      <BannerTitle title={fetchWord("request_services", lang)} />
      <div className="container">
        <div className="flex gap-8 mt-12 items-start">
          <HowItWork />
          <div className="flex-1">
            <TabsContent activeTabName={selectTab}>
              <RequestServicesForm
                tabName="information"
                setSelectedTab={setSelectedTab}
                getValues={getValues}
              />
              <RequestServicesConfirmation
                tabName="confirmation"
                setSelectedTab={setSelectedTab}
              />
            </TabsContent>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequestServices;
