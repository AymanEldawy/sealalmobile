import Slider from 'nouislider';
import React, { useEffect } from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

import 'nouislider/dist/nouislider.css';

export const CategoryFilterPrice = ({ title }) => {
  useEffect(() => {
    Slider.create(document.getElementById('sliderDouble'), {
      start: [50, 260],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 600 },
    });
  }, []);

  return (
    <div className="mb-4 p-4 lg:px-8 price-slide">
      <h3 className="text-primary mb-6 font-semibold text-xl">{title}</h3>

      <div className="input-slider-container">
        <div className="slider input-slider--yellow" id="sliderDouble"></div>
      </div>
      <div className=" mt-4 flex items-center justify-between">
        <p className="flex gap-1 font-medium">
          {title}:<span>200$</span>:<span>400$</span>
        </p>
        <PrimaryButton text="Filter" />
      </div>
    </div>
  );
};
