import { CashFlowIcon, CircleStrokeIcon, ElectricIcon } from "@/components/Icons";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";
import RatingStars from "@/components/RatingStars/RatingStars";
import SocialCard from "@/components/SocialCard/SocialCard";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const ProviderProfile = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="relative px-4 border-b-2 border-white pt-24 pb-4">
      <div className="flex justify-between flex-wrap gap-1 h-full">
        <Link
          href="/services"
          className="flex gap-2 text-primary font-medium capitalize"
        >
          <ElectricIcon />
          {fetchWord(provider?.services?.name, lang)}
        </Link>
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-medium text-lg">{provider?.name}</h3>
          <RatingStars rating={provider?.rating} />
        </div>
        <p className="font-medium flex gap-2">
          <CashFlowIcon />
          <div className="flex">
            <span className="text-primary font-medium capitalize">
              {provider?.hourPrice}$
            </span>
            /{fetchWord("hr", lang)}
          </div>
        </p>
      </div>
    </div>
  );
};

export default ProviderProfile;
