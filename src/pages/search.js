import CustomSelectField from "@/components/Forms/CustomSelectField";
import HeadBannerInfo from "@/components/HeadBannerInfo/HeadBannerInfo";
import { LockVectorIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext, useState } from "react";

const Search = () => {
  const { lang } = useContext(LanguageContext);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [countryState, setCountryState] = useState("");
  return (
    <Layout>
      <div className="overflow-hidden">
        <div className="container">
          <div className="flex justify-between gap-8">
            <div className="flex-1 mt-12">
              <HeadBannerInfo layout="services-page" />
              <div className="mt-8">
                <SearchBar inputClassName="!p-3" iconClassName="!px-5" />
              </div>
              <div className="flex gap-3 mt-4">
                <CustomSelectField
                  name="state"
                  value={countryState}
                  list={[]}
                  label={fetchWord("state", lang)}
                  onChange={(e) => setCountryState(e.target.value)}
                  iconClassName=" text-gray-500 "
                  selectClassName="bg-bmain border-none"
                />
                <CustomSelectField
                  name="country"
                  value={country}
                  list={[]}
                  label={fetchWord("country", lang)}
                  onChange={(e) => setCountry(e.target.value)}
                  iconClassName=" text-gray-500 "
                  selectClassName="bg-bmain border-none"
                />
                <CustomSelectField
                  name="city"
                  value={city}
                  list={[]}
                  label={fetchWord("city", lang)}
                  onChange={(e) => setCity(e.target.value)}
                  iconClassName=" text-gray-500 "
                  selectClassName="bg-bmain border-none"
                />
              </div>
            </div>
            <div className="-translate-y-48 -mr-56 ">
              <LockVectorIcon />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
