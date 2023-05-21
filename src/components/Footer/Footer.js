import { LanguageContext } from "@/context/LangContext";
import { footerAllHere, footerCategories, institutional, popularBrands, popularPhones } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import React, { useContext } from "react";

import Brand from "../Brand/Brand";
import PrimaryLink from "../Global/PrimaryLink/PrimaryLink";
import { ContactInfo } from "./ContactInfo";
import { FooterListTitle } from "./FooterListTitle";
import FormSubscription from "./FormSubscription/FormSubscription";
import Image from "next/image";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <footer className="relativeoverflow-hidden pt-16 bg-[#eff7ff]">
      <div className="container">
        <div className="flex gap-4">
          <div className="flex-[2] ltr:pr-8 rtl:pl-8">
            <Brand />
            <p className="text-[#323232] text-xs font-normal mt-8"> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century </p>
            <PrimaryLink link="/" className="mt-8 !p-3 !px-8 !rounded-3xl">
              {fetchWord('more_about', lang)}
            </PrimaryLink>

            <ContactInfo />
          </div>
          <div className="flex-1">
            <FooterListTitle title={fetchWord('institutional', lang)} />
            <ul className="text-white">
              {institutional.map(item => (
                <li key={item?.name}>
                  <Link href={item?.link} className="text-[#323232] text-xs font-medium">{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <FooterListTitle title={fetchWord('categories', lang)} />
            <ul className="text-white">
              {footerCategories.map(item => (
                <li key={item?.name}>
                  <Link href={item?.link} className="text-[#323232] text-xs font-medium">{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <FooterListTitle title={fetchWord('popular_brands', lang)} />
            <ul className="text-white">
              {popularBrands.map(item => (
                <li key={item?.name}>
                  <Link href={item?.link} className="text-[#323232] text-xs font-medium">{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <FooterListTitle title={fetchWord('popular_phones', lang)} />
            <ul className="text-white mb-4">
              {popularPhones.map(item => (
                <li key={item?.name}>
                  <Link href={item?.link} className="text-[#323232] text-xs font-medium">{item?.name}</Link>
                </li>
              ))}
            </ul>
            <FooterListTitle title={fetchWord('all_here', lang)} />
            <ul className="text-white">
              {footerAllHere.map(item => (
                <li key={item?.name}>
                  <Link href={item?.link} className="text-[#323232] text-xs font-medium">{item?.name}</Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      <FormSubscription />
      <div className="flex items-center justify-between container py-4 bg-bsecondary">
        <p className="text-secondary font-semibold text-[12px]">
          {fetchWord('copy_right_msg', lang)}
        </p>
        <Image src="/images/Payment methods logos.png" alt="available payment methods" height={25} width={230} />
      </div>
    </footer>
  );
};

export default Footer;
