import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useContext, useState } from "react";
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
  const router = useRouter()
  const { lang } = useContext(LanguageContext);
  const [favorite, setFavorite] = useState(order?.userId?.favorite)
  const myOffers = layout === "my_offers";
  const inProgress = layout === "in_progress";
  let operation = { operation: "update" };
  const handleLink = () => {
    router?.push(`/offers/${order?.offer?.offerNumber}`)
  }

  return (
    <div className="flex gap-4 flex-col p-4 pt-0 rounded-md bg-white">
      <div className="flex justify-between ltr:pr-2 rtl-pl-2 xs:gap-8 -mx-4 items-center">
        <div className="flex gap-2 items-center shadow-md p-1 px-4 min-h-[45px]">
          <Image
            className="object-contain cursor-pointer"
            src={order?.service?.image}
            alt={order?.service?.name}
            width={35}
            height={35}
          />
          <h4 className="text-sm capitalize text-primary cursor-pointer"

          >
            {order?.service?.name}
          </h4>
        </div>
        <span className="text-secondary text-sm">
          #{order?.offer?.offerNumber}
        </span>
        <p className="max-[350px]:hidden text-lead text-sm">{order?.offer?.date}</p>
      </div>
      <div className="flex flex-col xs:flex-row w-full gap-4 items-start">
        <Image
          onClick={handleLink}

          className="w-full object-contain xs:w-40 cursor-pointer"
          src={order?.offer?.image}
          alt={order?.offer?.name}
          width={170}
          height={220}
        />
        <div className="flex flex-col gap-1 w-full flex-1 relative">
          <span className="scale-75 cursor-pointer absolute rtl:left-2 ltr:right-2">
            {myOffers || inProgress ? (
              <span className="text-secondary text-lg">30$/{fetchWord('hr', lang)}</span>
            ) : (
              <button
                onClick={() => setFavorite(p => !p)}>

                <HeartIcon
                  className={
                    favorite
                      ? "text-red-500"
                      : "text-[#979797]"
                  }
                />
              </button>
            )}
          </span>
          <h3 className="font-medium text-lg cursor-pointer" onClick={handleLink}>{order?.offer?.name}</h3>
          <p className="min-[350px]:hidden text-lead text-sm">{order?.offer?.date}</p>
          <h4 className="text-lead text-sm">{order?.userId?.name}</h4>
          <div className="flex gap-2 items-center mt-4 flex-wrap justify-center">
            {inProgress ? (
              <Button
                onClick={() => {
                  onClickDone();
                  setOfferId(order?.offer?.offerNumber); // change by my current order id
                }}
                classes="!text-green-500 border-green-500 hover:!bg-green-500 hover:!text-white border rounded-md !bg-transparent flex-1 p-2 text-xs"
              >
                {fetchWord("done", lang)}
              </Button>
            ) : null}
            {layout === 'waiting_confirm' ? (
              <Button
                onClick={() => {
                  onClickDone();
                  setOfferId(order?.offer?.offerNumber); // change by my current order id
                }}
                classes="capitalize  bg-green-500 text-white border rounded-md flex-1 p-2 text-xs"
              >
                {fetchWord("accept_the_offer", lang)}
              </Button>
            ) : null}
            {layout ? null : <PrimaryLink
              link={{
                pathname: `/submit-offers/${order?.offer?.offerNumber}`,
                query: myOffers ? operation : "",
              }}
              className="flex-1 p-2 text-xs !text-white !bg-primary border rounded-md"

            >
              {fetchWord("submit_offer", lang)}
            </PrimaryLink>}
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
                className={`text-primary text-sm ${layout === 'waiting_approval' ? 'border p-1 rounded-md border-primary block w-full text-center' : ''}`}
              >
                {fetchWord(inProgress ? "cancel" : "view_details", lang)}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderCard);
