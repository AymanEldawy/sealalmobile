import React from 'react';
import { CardRate } from './../Card/CardRate';
import Image from 'next/image';
export const TestimonialCard = ({ review, row }) => {
  return (
    <div className="bg-bgseconday px-6 h-[245px] flex flex-col justify-center">
      <div className="flex gap-2">
        <figure>
          <Image
            src={review?.image}
            alt={review?.name}
            height={71}
            width={71}
            className="rounded-full"
          />
        </figure>
        <div className={row ? 'flex items-center gap-3' : 'flex flex-col'}>
          <h4 className="capitalize font-semibold text-tprimary text-2xl">
            {review?.name}
          </h4>
          <CardRate rating={review?.rating} />
        </div>
      </div>
      <p className="mt-4 text-xs font-normal">{review?.description}</p>
    </div>
  );
};
