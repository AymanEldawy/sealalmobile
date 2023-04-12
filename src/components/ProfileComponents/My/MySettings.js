import {
  ChevronIcon,
  LanguagesIcon,
  PrivacyIcon,
  SupportIcon,
  TermsIcon,
} from "@/components/Icons";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import React, { useState } from "react";
import SupportForm from "./Settings/SupportForm";
import Terms from "./Settings/Terms";
import Privacy from "./Settings/Privacy";

const settingList = [
  {
    icon: <LanguagesIcon />,
    name: "languages",
    iconEnd: <ChevronIcon className="h-3 w-3" />,
  },
  {
    icon: <PrivacyIcon />,
    name: "privacy_policy",
    iconEnd: <ChevronIcon className="h-3 w-3" />,
  },
  {
    icon: <TermsIcon />,
    name: "term_use",
    iconEnd: <ChevronIcon className="h-3 w-3" />,
  },
  {
    icon: <SupportIcon />,
    name: "support",
    iconEnd: <ChevronIcon className="h-3 w-3" />,
  },
];
const MySettings = () => {
  const [activeTab, setActiveTab] = useState(settingList[0]);
  return (
    <div className="flex gap-4 mt-4">
      <TabsList
        keyName="name"
        list={settingList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeClassName="bg-primary text-white w-full"
        itemClassName="border"
        containerClassName="gap-4 mt-4"
        direction="vertical"
        iconEndClassName="ltr:ml-auto rtl:mr-auto"
      />
      <div className="flex-1">

      <TabsContent activeTabName={activeTab?.name}>
        <SupportForm tabName="support" />
        {/* <Languages tabName="support" /> */}
        <Privacy tabName="privacy_policy" />
        <Terms tabName="term_use" />
      </TabsContent>
    </div>
    </div>
  );
};

export default MySettings;
