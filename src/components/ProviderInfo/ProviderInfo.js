import { LanguageContext } from "@/context/LangContext";
import { reviews } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext, useState } from "react";

import SeeMore from "../Global/SeeMore/SeeMore";
import ReviewCard from "../ReviewCard/ReviewCard";
import ProviderWorksTimeLine from "../ProviderWorksTimeLine/ProviderWorksTimeLine";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import FullImage from "../FullImage/FullImage";

const ProviderInfo = ({ provider }) => {
  const { lang } = useContext(LanguageContext);
  const [view, setView] = useState("");
  return (
    <>
      <div className="flex flex-col gap-4 justify-between">
        {view !== "gallery" ? (
          <>
            <div className="max-w-2xl flex-1">
              <h3 className="text-primary text-lg mb-4  capitalize">
                {fetchWord("about", lang)} {provider?.name}
              </h3>
              <p className="text-lead text-sm max-w-xl mb-4">
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with
              </p>
              <h3 className="text-primary text-lg mb-4  capitalize">
                {fetchWord("payment_methods_available", lang)}
              </h3>
              <PaymentMethods containerClassName="w-full mb-4 justify-around" />

              <div className="mt-12">
                <div className="flex justify-between gap-4 mb-4 items-center">
                  <h3 className="text-primary text-lg capitalize">
                    {fetchWord("customer_feedback", lang)}
                  </h3>
                  <SeeMore link="" />
                </div>
                {reviews?.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between gap-4 mb-4 items-center">
                <h3 className="text-primary text-lg capitalize">
                  {fetchWord("some_work", lang)}
                </h3>
                <button
                  className="capitalize text-secondary"
                  onClick={() => setView("gallery")}
                >
                  {fetchWord("see_more", lang)}
                </button>
              </div>
              <div className="gap-2 grid grid-cols-2">
                <FullImage
                  src="/images/projects/1.png"
                  alt="works 1"
                  height={200}
                  width={200}
                  className=" w-full max-w-full !h-full rounded-md object-cover"
                />
                <FullImage
                  src="/images/projects/2.png"
                  alt="works 2"
                  height={200}
                  width={200}
                  className=" w-full max-w-full !h-full rounded-md object-cover "
                />
                <FullImage
                  src="/images/projects/3.png"
                  alt="works 2"
                  height={200}
                  width={200}
                  className="w-full max-w-full !h-full rounded-md object-cover "
                />
                <FullImage
                  src="/images/projects/4.png"
                  alt="works 2"
                  height={200}
                  width={200}
                  className="w-full max-w-full !h-full rounded-md object-cover "
                />
                <FullImage
                  src="/images/projects/5.png"
                  alt="works 2"
                  height={200}
                  width={200}
                  className="w-full max-w-full !h-full rounded-md object-cover "
                />
                <FullImage
                  src="/images/projects/6.png"
                  alt="works 2"
                  height={200}
                  width={200}
                  className="w-full max-w-full !h-full rounded-md object-cover "
                />
              </div>
            </div>
          </>
        ) : (
          <ProviderWorksTimeLine />
        )}
      </div>

    </>

  );
};

export default ProviderInfo;
