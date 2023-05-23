import Slider from "rc-slider";
import React, { useContext } from "react";

import "rc-slider/assets/index.css";
import { FilterTitle } from "./FilterTitle";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";

function FilterPrice({ max, values, onChangePrice }) {
  const { lang } = useContext(LanguageContext);

  return (
    <div className='mt-4 border-b pb-4 px-4'>
      <FilterTitle title={fetchWord('price', lang)} />
      <Slider
        max={max}
        className="filter-price"
        range={true}
        defaultValue={[values?.[0], values?.[1]]}
        onChange={onChangePrice}
        dotStyle={{ width: '20px', height: '20px' }}
        railStyle={{ height: "7px" }}
        trackStyle={[{ background: "#094E99", height: '7px' }]}
      />
      <div className="flex justify-between items-center mt-4 -mx-2">
        <span className="text-sm text-[#1C1F23] font-meidum whitespace-nowrap capitalize">{fetchWord('min_price', lang)} {values?.[0]}</span>
        <span className="text-sm text-[#1C1F23] font-meidum whitespace-nowrap capitalize">{fetchWord('max_price', lang)} {values?.[1]}</span>
      </div>
    </div>
  );
}

export default FilterPrice;