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
    <div className="mt-12">
      <h3 className="text-lg font-medium mb-8 text-primary">
        {fetchWord("choose_plan", lang)}
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        {packages?.map((plan) => (
          <div
            className={`relative rounded-bl-[30px] rounded-tr-[30px] rounded-br-lg rounded-lr-lg p-6 flex-col flex gap-4 items-center
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
            <span className="absolute top-1 left-3">
              <GearIcon className="h-6 w-6 opacity-50" />
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
              {plan?.name}
            </h3>
            <h2 className="text-4xl font-medium flex items-end text-primary">
              {plan?.price}$
              <small className="text-[10px] -mb-2 ">
                /{fetchWord("month", lang)}
              </small>
            </h2>
            <ul className="flex flex-col gap-2">
              {plan?.features?.map((feature) => (
                <li className="text-lead text-sm" key={feature}>
                  - {feature}
                </li>
              ))}
            </ul>
            <Button
              classes={`capitalize min-w-[120px] text-black ${
                plan?.name === "basic"
                  ? "bg-secondary"
                  : "border-2 border-primary !bg-transparent"
              }`}
            >
              {fetchWord("add", lang)}
            </Button>
            <span className="absolute bottom-0 right-0">
              <GearWorkIcon className="h-14 w-14 opacity-50" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPackages;
