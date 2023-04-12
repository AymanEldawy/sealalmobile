import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Layout } from "@/components/Layout/Layout";
import SubmitOfferCard from "@/components/SubmitOfferCard/SubmitOfferCard";
import SubmitOfferForm from "@/components/SubmitOfferForm/SubmitOfferForm";
import { LanguageContext } from "@/context/LangContext";
import { getOfferById, offers } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const SubmitOffers = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const { id, operation } = router?.query;
  const [offer, serOffer] = useState({});
  useEffect(() => {
    serOffer(getOfferById(offers, id));
  }, [id]);
  return (
    <Layout>
      <BannerTitle
        title={
          <span className="flex flex-col items-center justify-center">
            {fetchWord("submit_offer", lang)}
            <span className="text-secondary block mt-2 text-base">#{id}</span>
          </span>
        }
      />
      <div className="bg-[#F6F6F6] p-8">
        <div className="container">
          <div className="flex gap-6">
            <SubmitOfferCard offer={offer} />
            <div className="flex-1">
              <SubmitOfferForm operation={operation}/>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitOffers;
