import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { allProposal, getOfferById, offers, serviceProviders } from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import ProposalCard from "@/components/ProposalCard/ProposalCard";
const SingleOffer = () => {
  const { lang } = useContext(LanguageContext);
  const [offer, setOffer] = useState({});
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setOffer(getOfferById(offers, id));
  }, [id]);
  return (
    <Layout
      full
      mainClassName="!rounded-none bg-[#F2F2F2]"
      title={fetchWord("offers", lang)}
    >
      <div className="container">
        {/* <RequestServicesConfirmation
          layout="view"
          // tabName="confirmation"
          // setSelectedTab={setSelectedTab}
          // setOpenFormFeedback={setOpenFormFeedback}
        /> */}
        <div className="flex flex-col gap-4 pt-8">
          <Image
            className="object-cover w-full flex-1"
            src={offer?.image}
            alt={offer?.name}
            width={300}
            height={200}
          />
          <div className="flex flex-col gap-2 flex-1 relative">
            <h3 className="font-medium text-2xl">{offer?.name}</h3>
            <div className="flex justify-between items-center gap-2 flex-wrap">
              <span className="text-secondary ">#{offer?.offerNumber}</span>
              <p className="text-lead ">{offer?.date}</p>
            </div>
          </div>
        </div>
        <div className="border border-white my-4 -mx-4" />

        <div className="pb-32">
          <div className="flex justify-between mb-4">
            <h2 className="text-primary text-xl items-center capitalize font-medium flex gap-2">
              {fetchWord("all_offers", lang)}
              <span className="text-gray-400 text-xs">(20)</span>
            </h2>
            <Link href="" className="text-sm capitalize text-gray-600">
              {fetchWord("see_all", lang)}
            </Link>
          </div>
          <div className="grid gap-4">
            {allProposal?.slice(0, 6)?.map((proposal, index) => (
              <ProposalCard proposal={proposal} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOffer;
