import { ChevronIcon, LanguagesIcon, PrivacyIcon, SupportIcon, TermsIcon } from "@/components/Icons";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import React, { useState } from "react";

import Privacy from "./Settings/Privacy";
import SupportForm from "./Settings/SupportForm";
import Terms from "./Settings/Terms";
import Languages from "@/components/Languages/Languages";

const settingList = [
  {
    icon: <LanguagesIcon />,
    name: "languages",
    iconEnd: <ChevronIcon className=" text-primary h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <PrivacyIcon />,
    name: "privacy_policy",
    iconEnd: <ChevronIcon className=" text-primary h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <TermsIcon />,
    name: "term_use",
    iconEnd: <ChevronIcon className=" text-primary h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <SupportIcon />,
    name: "support",
    iconEnd: <ChevronIcon className=" text-primary h-3 w-3 rtl:rotate-180" />,
  },
];
const MySettings = ({ activeTab, setActiveTab }) => {
  return (
    <div className="">
      {!activeTab ? (
        <TabsList
          keyName="name"
          list={settingList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeClassName="bg-primary text-white w-full"
          itemClassName="border bg-white !p-4 rounded-lg"
          containerClassName="gap-4 mt-4"
          direction="vertical"
          iconEndClassName="ltr:ml-auto rtl:mr-auto"
        />
      ) : (
        <TabsContent activeTabName={activeTab?.name}>
          <SupportForm tabName="support" />
          <Privacy tabName="privacy_policy" />
          <Terms tabName="term_use" />
          <Languages tabName="languages" />
        </TabsContent>
      )}
    </div>
  );
};

export default MySettings;
