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
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="shrink-0 scale-125">
          <ChooseIcon />
        </span>
        <span className="min-[520px]:whitespace-nowrap text-white" >
          {fetchWord("choose_location", lang)}
        </span>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <CustomSelectField
          name="state"
          value={countryState}
          list={[]}
          placeholder={fetchWord("state", lang)}
          onChange={(e) => setCountryState(e.target.value)}
          iconClassName=" text-white  !bg-none"
          selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
          containerClassName="!mb-0 flex-1 min-w-[120px]"
        />
        <CustomSelectField
          name="town"
          value={town}
          list={[]}
          placeholder={fetchWord("town", lang)}
          onChange={(e) => setTown(e.target.value)}
          iconClassName=" text-white  !bg-none"
          selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
          containerClassName="!mb-0 flex-1 min-w-[120px]"
        />
        <CustomSelectField
          name="country"
          value={country}
          placeholder={fetchWord("country", lang)}
          onChange={(e) => setCountry(e.target.value)}
          iconClassName=" text-white  !bg-none"
          selectClassName="bg-bmain text-sm  border-none bg-[#ffffff50] !text-white"
          containerClassName="!mb-0 flex-1 min-w-[120px]"
        />
      </div>

    </div>
  );
};

export default BannerLocation;
