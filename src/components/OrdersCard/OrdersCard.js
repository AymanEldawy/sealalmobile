import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";

const OrderCard = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="flex gap-4 flex-col p-4 rounded-md bg-white">
        <div className="flex gap-4">
          <Image
            src={order?.image}
            alt={order?.name}
            width={140}
            height={200}
          />
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="font-medium text-lg">{order?.name}</h3>
            <span className="text-secondary text-sm">#{order?.id}</span>
            <p className="text-lead text-sm">{order?.date}</p>
          </div>
        </div>
        {hideButton ? null : (
          <PrimaryLink
            link={`/offers/${order?.id}`}
            className="border-primary text-sm text-primary rounded-md text-center border w-full p-2 hover:bg-primary hover:text-white"
          >
            {fetchWord("view_offers", lang)}
          </PrimaryLink>
        )}
      </div>
    </Layout>
  );
};

export default OrderCard;
