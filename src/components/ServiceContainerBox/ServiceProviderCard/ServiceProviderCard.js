import { Button } from "@/components/Global/Button/Button";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import { HeartIcon } from "@/components/Icons";
import RatingStars from "@/components/RatingStars/RatingStars";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const ServiceProviderCard = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  console.log(provider?.image);
  return (
    <div className="shadow rounded-xl p-4 flex gap-4 bg-white">
      <div className="flex items-start justify-start xs:w-[40%]">
        <Image
          className="object-cover object-top max-h-[140px] max-w-full w-full rounded-xl overflow-hidden"
          src={`${provider?.image}`}
          alt={provider?.name}
          height={160}
          width={150}
        />
      </div>
      <div className="flex-1">
        <div className="flex flex-col w-full h-full">
          <div className="">
            <h3 className="font-medium text-xl mb-1">{provider?.name}</h3>
          </div>
          <RatingStars rating={provider?.rating} />
          <p className="font-medium flex text-base mt-2">
            <span className="text-primary">{provider?.hourPrice}$</span>
            <span>/{fetchWord('hr', lang)}</span>
          </p>
          <PrimaryLink
            link={`/providers/${provider?.id}`}
            className="border-primary mt-auto border-2 block !w-full font-medium capitalize text-sm !bg-transparent !text-black"
          >
            {fetchWord("view_profile", lang)}
          </PrimaryLink>
        </div>

      </div>
    </div>
  );
};

export default ServiceProviderCard;
