import React from 'react';
import { CheckIcon } from './../Icons/CheckIcon';

export const ProductDescription = () => {
  return (
    <div className="p-4">
      <p className="mb-6 text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat.
      </p>
      <ul className="lg:max-w-[80%] gap-4 flex flex-col mx-auto text-secondary">
        <li className="flex gap-3 items-center">
          <span className="scale-90 bg-primary h-7 w-7 rounded-full flex items-center justify-center">
            <CheckIcon />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="flex gap-3 items-center">
          <span className="scale-90 bg-primary h-7 w-7 rounded-full flex items-center justify-center">
            <CheckIcon />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="flex gap-3 items-center">
          <span className="scale-90 bg-primary h-7 w-7 rounded-full flex items-center justify-center">
            <CheckIcon />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
      <p className="text-secondary mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
      </p>
    </div>
  );
};
