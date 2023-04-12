import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { InProgressIcon, MyOfferIcon, NewOrderIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import NewOrders from "@/components/NewOrders/NewOrders";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const ServiceProvider = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
    </Layout>
  );
};

export default ServiceProvider;
