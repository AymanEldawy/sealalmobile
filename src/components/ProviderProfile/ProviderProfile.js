import React from "react";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";
import RatingStars from "@/components/RatingStars/RatingStars";
import SocialCard from "@/components/SocialCard/SocialCard";
import Image from "next/image";
import Link from "next/link";
import {
    CashFlowIcon,
    CircleStrokeIcon,
    ElectricIcon,
  } from "@/components/Icons";

const ProviderProfile = ({ provider }) => {
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
        <div className="flex flex-1 justify-between gap-4 pr-10">
          <div className="flex flex-col gap-6 h-full">
            <h3 className="font-medium text-lg">{provider?.name}</h3>
            <Link
              href="/services"
              className="flex gap-2 text-sm text-primary font-medium capitalize"
            >
              <ElectricIcon />
              {provider?.services?.name}
            </Link>
            <p className="font-medium flex gap-2 text-sm">
              <CashFlowIcon />
              <div className="flex">
                <span className="text-primary font-medium capitalize">
                  {provider?.hourPrice}$
                </span>
                /hr
              </div>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <SocialCard withMessage iconClassName="text-yellow-500" />
            <RatingStars rating={provider?.rating} />
            <PaymentMethods />
          </div>
        </div>
        <span className="absolute -right-[68px] -bottom-20 scale-[35%]">
          <CircleStrokeIcon />
        </span>
      </div>
    </ProfileBanner>
  );
};

export default ProviderProfile;
