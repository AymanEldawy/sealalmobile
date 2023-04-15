import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { memo } from "react";

import { Button } from "../Global/Button/Button";
import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";
import { HeartIcon } from "../Icons";

const OrderCard = ({
  order,
  layout,
  onClickCancel,
  onClickDone,
  setOfferId,
}) => {
  const { lang } = useContext(LanguageContext);
  const myOffers = layout === "my_offers";
  const inProgress = layout === "in_progress";
  let operation = { operation: "update" };
  return (
    <div className="flex gap-4 flex-col p-4 pt-0 rounded-md bg-white">
      <div className="flex gap-8 justify-between ltr:pr-8 rtl:pl-8 -mx-4 items-center">
        <div className="flex gap-2 items-center shadow-md p-1 px-4 min-h-[45px]">
          <Image
            className="object-contain"
            src={order?.service?.image}
            alt={order?.service?.name}
            width={35}
            height={35}
          />
          <h4 className="text-sm capitalize text-primary">
            {order?.service?.name}
          </h4>
        </div>
        <span className="text-secondary text-sm">
          #{order?.offer?.offerNumber}
        </span>
        <p className="text-lead text-sm">{order?.offer?.date}</p>
      </div>
      <div className="flex gap-4 items-start">
        <Image
          src={order?.offer?.image}
          alt={order?.offer?.name}
          width={140}
          height={200}
        />
        <div className="flex flex-col gap-3 flex-1 relative">
          <span className="scale-75 cursor-pointer absolute rtl:left-2 ltr:right-2">
            {myOffers || inProgress ? (
              <span className="text-secondary text-lg">
                30$/{fetchWord("hr", lang)}
              </span>
            ) : (
              <HeartIcon
                className={
                  order?.userId?.favorite
                    ? "text-white bg-red-400 rounded-full"
                    : "text-[#979797]"
                }
              />
            )}
          </span>
          <h3 className="font-medium text-lg">{order?.offer?.name}</h3>
          <h4 className="text-lead text-sm">{order?.userId?.name}</h4>
        </div>
      </div>
        <div className="flex gap-4 items-center ">
          {inProgress ? (
            <Button
              onClick={() => {
                onClickDone();
                setOfferId(order?.offer?.offerNumber); // change by my current order id
              }}
              classes="!text-green-500 border-primary border rounded-sm !bg-transparent flex-1 p-2 text-xs"
            >
              {fetchWord("done", lang)}
            </Button>
          ) : (
            <PrimaryLink
              link={{
                pathname: `/submit-offers/${order?.offer?.offerNumber}`,
                query: myOffers ? operation : "",
              }}
              className={`flex-1 p-2 text-xs ${
                myOffers || inProgress
                  ? "!text-primary border-primary border rounded-sm !bg-transparent"
                  : ""
              } `}
            >
              {fetchWord(myOffers ? "edit_offer" : "submit_offer", lang)}
            </PrimaryLink>
          )}
          {inProgress ? (
            <button
              onClick={() => {
                onClickCancel();
                setOfferId(order?.offer?.offerNumber); // change by my current order id
              }}
              className="text-red-500 text-sm"
            >
              {fetchWord(inProgress ? "cancel" : "view_details", lang)}
            </button>
          ) : (
            <Link
              href={`/offers/${order?.offer?.offerNumber}`}
              className="text-primary text-sm"
            >
              {fetchWord(inProgress ? "cancel" : "view_details", lang)}
            </Link>
          )}
        </div>
    </div>
  );
};

export default memo(OrderCard);
