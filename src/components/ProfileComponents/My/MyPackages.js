import { Button } from "@/components/Global/Button/Button";
import { GearIcon, GearWorkIcon } from "@/components/Icons";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";

const packages = [
  { name: "basic", price: "9.99", features: ["15 offer", "support", "more"] },
  {
    name: "standard",
    price: "15.55",
    features: ["25 offer", "support", "more"],
  },
  {
    name: "premium",
    price: "24.99",
    features: ["45 offer", "support", "more"],
  },
];

const MyPackages = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="">
      <h3 className="text-center text-lg font-medium mb-4 text-primary">
        {fetchWord("choose_plan", lang)}
      </h3>

      <div className="flex flex-col gap-4">
        {packages?.map((plan) => (
          <div
            className={`relative bg-white rounded-bl-[30px] rounded-tr-[30px] rounded-br-lg rounded-lr-lg p-3 px-8 xs:px-16 flex-col flex gap-4 items-start
            ${
              plan?.name === "standard"
                ? "bg-yellow-100"
                : plan?.name !== "basic"
                ? "bg-blue-100"
                : "shadow"
            }
            `}
            key={plan?.name}
          >
            <span className="absolute top-1 left-1">
              <GearIcon className="h-10 w-10 opacity-50" />
            </span>
            <h3
              className={`font-medium capitalize ${
                plan?.name === "standard"
                  ? "text-black"
                  : plan?.name === "basic"
                  ? "text-secondary"
                  : "text-primary"
              }`}
            >
              {fetchWord(plan?.name, lang)}
            </h3>
            <h2 className="text-5xl font-medium flex items-end text-primary">
              {plan?.price}$
              <small className="text-xs -mb-2 ">
                /{fetchWord("month", lang)}
              </small>
            </h2>
            <div className="flex justify-between w-full items-end">
              <ul className="flex flex-col gap-2">
                {plan?.features?.map((feature) => (
                  <li className="flex text-lead text-sm" key={feature}>
                    - {feature}
                  </li>
                ))}
              </ul>
              <Button
                classes={`capitalize min-w-[150px] text-sm !p-2 text-black ${
                  plan?.name === "basic"
                    ? "bg-secondary"
                    : "border-2 border-primary !bg-transparent"
                }`}
              >
                {fetchWord("add", lang)}
              </Button>
            </div>
            <span className="absolute bottom-0 right-0 ">
              <GearWorkIcon className="h-20 w-20 opacity-50" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPackages;
