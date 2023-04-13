import React from "react";
import ProfileInformation from "./ProfileInformation";
import TabsList from "../Tabs/TabsList";
import { LogoutIcon, PackagesIcon, PaymentsIcon, GearIcon } from "../Icons";
import { useState } from "react";
import TabsContent from "../Tabs/TabsContent";
import MyPayments from "./My/MyPayments";
import MyPackages from "./My/MyPackages";
import MySettings from "./My/MySettings";
import CompaniesSuggestions from "./My/CompaniesSuggestions";

const profileList = [
  { icon: <GearIcon className="h-6 w-6" />, name: "settings", role: ["all"] },
  { icon: <PaymentsIcon />, name: "payments", role: ["all"] },
  { icon: <PackagesIcon />, name: "packages", role: ["provider"] },
  {
    icon: <PackagesIcon />,
    name: "companies_and_suggestions",
    role: ["client"],
  },
  { icon: <LogoutIcon />, name: "logout", role: ["all"] },
];

const ProfileBody = ({ role }) => {
  const [activeTab, setActiveTab] = useState(profileList[0]);
  const list = profileList?.filter(
    (item) => item?.role?.includes(role) || item?.role?.includes("all")
  );
  return (
    <div className="container">
      <div className="flex gap-4">
        <ProfileInformation />
        <div className="flex-1">
          <TabsList
            containerClassName="shadow-md justify-around"
            itemClassName="whitespace-nowrap !py-5 text-center"
            activeClassName="border-b-4 border-primary"
            keyName="name"
            list={list}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabsContent activeTabName={activeTab?.name}>
            <MyPayments tabName="payments" />
            <MyPackages tabName="packages" />
            <MySettings tabName="settings" />
            <CompaniesSuggestions tabName="companies_and_suggestions" />
          </TabsContent>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
