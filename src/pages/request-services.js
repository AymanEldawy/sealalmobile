import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Button } from "@/components/Global/Button/Button";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import HowItWork from "@/components/HowItWork/HowItWork";
import { RequestCompleteIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import RequestServicesConfirmation from "@/components/RequestServicesConfirmation/RequestServicesConfirmation";
import RequestServicesForm from "@/components/RequestServicesForm/RequestServicesForm";
import RequestServicesFormFeedback from "@/components/RequestServicesFormFeedback/RequestServicesFormFeedback";
import RequestServicesFormUpload from "@/components/RequestServicesFormUpload/RequestServicesFormUpload";
import TabsContent from "@/components/Tabs/TabsContent";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
const RequestServices = () => {
  const { lang } = useContext(LanguageContext);
  const [selectTab, setSelectedTab] = useState(1);
  const [openFormFeedback, setOpenFormFeedback] = useState(false);
  const getValues = (values) => {};
  const onFeedbackSubmit = (values) => {
    console.log(values);
  };

  const displayTitle = () => {
    switch (selectTab) {
      case 1:
        return fetchWord("request_services", lang);
      case 2:
      case 3:
        return fetchWord("add_information", lang);
      case 4:
        return fetchWord("confirmation", lang);
      case 5:
        return fetchWord("done", lang);
    }
  };

  const goBack = () => {
    setSelectedTab((prev) => prev - 1);
  };
  return (
    <>
      <RequestServicesFormFeedback
        openFormFeedback={openFormFeedback}
        setOpenFormFeedback={setOpenFormFeedback}
        onFeedbackSubmit={onFeedbackSubmit}
      />
      <Layout
        full
        title={displayTitle()}
        hideBottomMenu
        mainClassName="bg-[#f2f2f2] h-full"
        handleBack={selectTab > 1 ? goBack : undefined}
      >
        <div className="container pt-8">
          {selectTab > 1 && selectTab < 5 ? (
            <div className="flex items-center justify-around pb-8 max-w-[400px] mx-auto">
              <span
                className={`h-10 w-10 rounded-full text-gray-300 font-medium border-4 border-gray-400 flex items-center justify-center  ${
                  selectTab >= "2" ? "!text-black !border-green-400" : ""
                } `}
              >
                1
              </span>
              <span
                className={`border-t-2 border-dashed flex-1 ${
                  selectTab > 2 ? "border-green-500" : ""
                }`}
              />
              <span
                className={`h-10 w-10 rounded-full text-gray-300 font-medium border-4 border-gray-400 flex items-center justify-center  ${
                  selectTab >= "3" ? "!text-black !border-green-400" : ""
                } `}
              >
                2
              </span>
              <span
                className={`border-t-2 border-dashed flex-1 ${
                  selectTab > 3 ? "border-green-500" : ""
                }`}
              />
              <span
                className={`h-10 w-10 rounded-full text-gray-300 font-medium border-4 border-gray-400 flex items-center justify-center  ${
                  selectTab >= "4" ? "!text-black !border-green-400" : ""
                } `}
              >
                3
              </span>
            </div>
          ) : null}
          <TabsContent activeTabName={selectTab}>
            <HowItWork tabName={1} setSelectedTab={setSelectedTab} />
            <RequestServicesForm
              tabName={2}
              setSelectedTab={setSelectedTab}
              getValues={getValues}
            />
            <RequestServicesFormUpload
              tabName={3}
              setSelectedTab={setSelectedTab}
            />
            <RequestServicesConfirmation
              tabName={4}
              setSelectedTab={setSelectedTab}
              setOpenFormFeedback={setOpenFormFeedback}
            />
            <div className="" tabName={5}>
              <div className="w-fit mx-auto my-8">
                <RequestCompleteIcon />
              </div>
              <h2 className="text-primary text-center max-w-md mx-auto mb-2 font-medium">
                {fetchWord("request_successfully", lang)}
              </h2>
              <p className="text-center max-w-md mx-auto mb-2 font-medium">
                {fetchWord("notification_servers_owners", lang)}
              </p>
              <Link href="/my-requests" className="p-4 rounded-lg text-center capitalize bg-secondary w-full block mt-8 font-medium">
                {fetchWord("requests", lang)}
              </Link>
              <button className="text-red-500 capitalize mx-auto block w-fit mt-4 font-medium">
                {" "}
                {fetchWord("cancel", lang)}
              </button>
            </div>
          </TabsContent>
        </div>
      </Layout>
    </>
  );
};

export default RequestServices;
