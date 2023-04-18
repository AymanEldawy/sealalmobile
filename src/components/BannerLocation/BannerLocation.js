import React, { useContext } from "react";
import { ChooseIcon } from "../Icons";
import { LanguageContext } from "@/context/LangContext";
import { useState } from "react";
import CustomSelectField from "../Forms/CustomSelectField";
import { fetchWord } from "@/lang/fetchWord";

const BannerLocation = () => {
  const { lang } = useContext(LanguageContext);
  const [country, setCountry] = useState("");
  const [town, setTown] = useState("");
  const [countryState, setCountryState] = useState("");

  return (
    <div className="flex gap-2 mt-4 items-center min-[0px]:flex-col min-[500px]:flex-row">
      <div className="flex items-center gap-2">
        <span className="shrink-0">


          <ChooseIcon />
        </span>
        <span className="min-[520px]:whitespace-nowrap text-white text-sm" >
          {fetchWord("choose_location", lang)}
        </span>
      </div>
      <CustomSelectField
        name="state"
        value={countryState}
        list={[]}
        placeholder={fetchWord("state", lang)}
        onChange={(e) => setCountryState(e.target.value)}
        iconClassName=" text-white  !bg-none"
        selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
        containerClassName="!mb-0"
      />
      <CustomSelectField
        name="town"
        value={town}
        list={[]}
        placeholder={fetchWord("town", lang)}
        onChange={(e) => setTown(e.target.value)}
        iconClassName=" text-white  !bg-none"
        selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
        containerClassName="!mb-0"
      />
      <CustomSelectField
        name="country"
        value={country}
        placeholder={fetchWord("country", lang)}
        onChange={(e) => setCountry(e.target.value)}
        iconClassName=" text-white  !bg-none"
        selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
        containerClassName="!mb-0"
      />
    </div>
  );
};

export default BannerLocation;
