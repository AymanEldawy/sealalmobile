import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { CartIcon } from './../Icons/CartIcon';
import { CloseIcon } from './../Icons/CloseIcon';
import Image from 'next/image';
export const ProductItemRow = ({ product }) => {
  return (
    <div className="p-2 px-4 flex items-center">
      <div className="flex-1">
        <div className="flex gap-4">
          <figure>
            <Image
              src={product?.img}
              alt={product?.title}
              height={180}
              width={150}
            />
          </figure>
          <div>
            <h4 className="capitalize text-lg font-medium mb-2">{product?.title}</h4>
            <ul className='flex flex-col gap-2'>
              <li>
                Product code: <span>47536</span>
              </li>
              <li>
                Category: <span>{product?.category?.name}</span>
              </li>
              <li>
                size: <span>{product?.size}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/5">
        <h4 className="capitalize text-lg font-normal">{product?.price}$</h4>
      </div>
      <div className="w-1/5 ">
        <h4 className="capitalize text-lg font-normal">
          {product?.in_stock ? 'In Stock' : "Item isn't available"}
        </h4>
      </div>
      <div className="w-1/5 flex gap-2 justify-end">
        <button>
          <CloseIcon />
        </button>
        <PrimaryButton
          classes="flex gap-1 items-center !py-1 px-2"
          text="Add to Cart"
          icon={<CartIcon color="white" style={{ transform: 'scale(.7)' }} />}
        />
      </div>
    </div>
  );
};
