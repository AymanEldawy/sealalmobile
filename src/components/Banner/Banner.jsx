import Styles from '@/styles/Home/Home.module.css';
import Image from 'next/image';
import React from 'react';

import { BannerInfo } from './BannerInfo';

export const Banner = () => {
  return (
    <div className="">
      <div className="flex gap-2 max-h-[474px] overflow-hidden">
        <figure className={`${Styles.banner_img} flex-1`}>
          <Image
            src="/images/home/hero-1.png"
            alt="logo"
            width="480"
            height="474"
          />
        </figure>
        <figure className={`${Styles.banner_img} flex-1`}>
          <Image
            src="/images/home/hero-3.jpg"
            alt="logo"
            width="480"
            height="474"
          />
        </figure>
        <figure className={`${Styles.banner_img} flex-1`}>
          <Image
            src="/images/home/hero-3.jpg"
            alt="logo"
            width="480"
            height="474"
          />
        </figure>
      </div>
      <BannerInfo />
    </div>
  );
};
