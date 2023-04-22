import { Button } from "@/components/Global/Button/Button";
import PrimaryLink from "@/components/Global/PrimaryLink/PrimaryLink";
import { HeartIcon } from "@/components/Icons";
import RatingStars from "@/components/RatingStars/RatingStars";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";

const ServiceProviderCard = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const handleLink = () => {
    router.push(`/providers/${provider?.id}`)
  }
  console.log(provider?.image);
  return (
    <div className="shadow rounded-xl flex gap-4 bg-white">
      <div className="flex items-start justify-start xs:w-[40%]">
        <Image
          onClick={handleLink}
          className="cursor-pointer object-cover object-top w-[120px] h-[120px] xs:max-h-[140px] xs:h-full xs:max-w-full xs:w-full rounded-xl overflow-hidden"
          src={`${provider?.image}`}
          alt={provider?.name}
          height={160}
          width={150}
        />
      </div>
      <div className="flex-1 px-2 py-2">
        <div className="flex flex-col w-full h-full">
          <div className="">
            <h3 className="font-medium mb-1">{provider?.name}</h3>
          </div>
          <RatingStars rating={provider?.rating} />
          <p className="font-medium flex text-sm mt-2">
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
