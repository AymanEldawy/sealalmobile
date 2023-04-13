import {
  CashFlowIcon,
  CircleStrokeIcon,
  ElectricIcon,
} from "@/components/Icons";
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
    <ProfileBanner bannerClassName="translate-y-28" containerClassName="mb-32">
      <div className="flex gap-4 relative ">
        <Image
          className="rounded-[50%] object-cover  h-36 w-h-36 border-4 border-[#F2F2F2] "
          src={provider?.image}
          alt={provider?.name}
          height={150}
          width={150}
        />
        <div className="flex flex-1 justify-between gap-4 ltr:pr-10 rtl:pl-10">
          <div className="flex flex-col gap-6 h-full">
            <h3 className="font-medium text-lg">{provider?.name}</h3>
            <Link
              href="/services"
              className="flex gap-2 text-sm text-primary font-medium capitalize"
            >
              <ElectricIcon />
              {fetchWord(provider?.services?.name, lang)}
            </Link>
            <p className="font-medium flex gap-2 text-sm">
              <CashFlowIcon />
              <div className="flex">
                <span className="text-primary font-medium capitalize">
                  {provider?.hourPrice}$
                </span>
                /{fetchWord("hr", lang)}
              </div>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <SocialCard withMessage iconClassName="!text-yellow-500" />
            <RatingStars rating={provider?.rating} />
            <PaymentMethods />
          </div>
        </div>
        <span className="absolute ltr:-right-[68px] rtl:-left-[68px]  -bottom-20 scale-[35%]">
          <CircleStrokeIcon />
        </span>
      </div>
    </ProfileBanner>
  );
};

export default ProviderProfile;
