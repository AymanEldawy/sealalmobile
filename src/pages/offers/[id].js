import BannerTitle from "@/components/BannerTitle/BannerTitle";
import { Layout } from "@/components/Layout/Layout";
import OfferCard from "@/components/OfferCard/OfferCard";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { getOfferById, offers, serviceProviders } from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppShareIcon } from "@/components/Icons";
import ServiceProviderCard from "@/components/ServiceContainerBox/ServiceProviderCard/ServiceProviderCard";
const SingleOffer = () => {
  const { lang } = useContext(LanguageContext);
  const [offer, setOffer] = useState({});
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setOffer(getOfferById(offers, id));
  }, [id]);
  return (
    <Layout>
      <BannerTitle title={fetchWord("offers", lang)} />
      <div className="container">
        <div className="flex gap-12 mt-8">
          <Image
            className="object-cover w-full flex-1 max-w-[400px]"
            src={offer?.image}
            alt={offer?.name}
            width={140}
            height={200}
          />
          <div className="flex flex-col gap-3 flex-1 relative">
            <Link href="" className="absolute top-0 ltr:right-0 rtl:left-0">
              <WhatsAppShareIcon />
            </Link>
            <h3 className="font-medium text-2xl">{offer?.name}</h3>
            <span className="text-secondary ">#{offer?.offerNumber}</span>
            <p className="text-lead ">{offer?.date}</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex justify-between mb-4">
            <h2 className="text-primary text-xl items-center capitalize font-medium flex gap-2">
              {fetchWord("all_offers", lang)}
              <span className="text-gray-400 text-xs">(20)</span>
            </h2>
            <Link href="" className="text-sm capitalize text-gray-600">
              {fetchWord("see_all", lang)}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceProviders?.slice(0, 6)?.map((provider, index) => (
              <ServiceProviderCard key={index} provider={provider} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleOffer;
