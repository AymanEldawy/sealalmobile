import {
  ChevronIcon,
  GearIcon,
  LogoutIcon,
  PackagesIcon,
  PaymentsIcon,
} from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import CompaniesSuggestions from "@/components/ProfileComponents/My/CompaniesSuggestions";
import MyPackages from "@/components/ProfileComponents/My/MyPackages";
import MyPayments from "@/components/ProfileComponents/My/MyPayments";
import MySettings from "@/components/ProfileComponents/My/MySettings";
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileInformation from "@/components/ProfileComponents/ProfileInformation";
import ProfileEditForm from "@/components/ProfileEditForm/ProfileEditForm";
import TabsContent from "@/components/Tabs/TabsContent";
import TabsList from "@/components/Tabs/TabsList";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const profileList = [
  {
    icon: <GearIcon className="h-6 w-6" />,
    name: "settings",
    role: ["all"],
    iconEnd: <ChevronIcon className="h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <PaymentsIcon />,
    name: "payments",
    role: ["all"],
    iconEnd: <ChevronIcon className="h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <PackagesIcon />,
    name: "packages",
    role: ["provider"],
    iconEnd: <ChevronIcon className="h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <PackagesIcon />,
    name: "companies_and_suggestions",
    role: ["company"],
    iconEnd: <ChevronIcon className="h-3 w-3 rtl:rotate-180" />,
  },
  {
    icon: <LogoutIcon />,
    name: "logout",
    role: ["all"],
  },
];

const MyProfile = () => {
  const { lang } = useContext(LanguageContext);
  const [handelBack, setHandelBack] = useState(undefined);
  // to change between user role you can use one of these words [company | provider]
  const [userRole, setUserRole] = useState("company");
  const [activeTab, setActiveTab] = useState();
  const [activeTabNested, setActiveTabNested] = useState("");
  const list = profileList?.filter(
    (item) => item?.role?.includes(userRole) || item?.role?.includes("all")
  );
  const changeRole = () => {
    if (userRole === "company") {
      setUserRole("provider");
    } else setUserRole("company");
    setActiveTab("");
    setActiveTabNested('')
  };
  const goBack = () => {
    if (activeTab?.name === "settings" && activeTabNested) {
      setActiveTabNested("");
    } else {
      setActiveTab("");
    }
  };
  return (
    <Layout
      handleBack={activeTab ? goBack : undefined}
      full
      title={fetchWord(
        userRole === "company"
          ? "company_account"
          : !activeTab
          ? "my_account"
          : activeTabNested
          ? activeTabNested?.name
          : activeTab?.name,
        lang
      )}
    >
      <ProfileHeader
        role={userRole}
        changeRole={changeRole}
        setActiveTab={setActiveTab}
      />
      <div className="h-10 bg-white">
        <span className="bg-[#f2f2f2]  h-full block w-full rounded-tr-[40px]"></span>
      </div>
      <div className="container">
        {!activeTab ? (
          <>
            <ProfileInformation role={userRole} setActiveTab={setActiveTab} />
            <TabsList
              direction="vertical"
              containerClassName="gap-4"
              itemClassName="whitespace-nowrap bg-white rounded-xl !p-4 text-center"
              keyName="name"
              list={list}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              iconClassName="w-6"
              iconEndClassName="ltr:ml-auto rtl:mr-auto"
            />
          </>
        ) : (
          <TabsContent activeTabName={activeTab?.name}>
            <MyPayments tabName="payments" />
            <MyPackages tabName="packages" />
            <MySettings
              tabName="settings"
              activeTab={activeTabNested}
              setActiveTab={setActiveTabNested}
            />
            <CompaniesSuggestions tabName="companies_and_suggestions" />
            <ProfileEditForm tabName="edit_profile" />
          </TabsContent>
        )}
        <div className="h-12" />
      </div>{" "}
    </Layout>
  );
};

export default MyProfile;
