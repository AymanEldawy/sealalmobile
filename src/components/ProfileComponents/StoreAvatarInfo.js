import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image'
import React, { useContext, useState } from 'react'

import { FollowBtn } from '../FollowBtn/FollowBtn';

export const StoreAvatarInfo = ({ small, hideFollow }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex gap-2 items-start w-full">
      <figure className={`rounded-full ${small ? "w-12 h-12" : "w-12 h-12"}`}>
        <Image src="/images/profile-banner.png" alt="" width={66} height={66} className="rounded-full object-cover w-full h-full" />
      </figure>
      <div className="">
        <div className="flex gap-4">
          <h3 className={`${small ? 'text-base' : "text-lg"} text-secondary font-semibold capitalize`}>Store name</h3>
        </div>
        <p className={`text-[#2E2E2E] ${small ? 'text-xs' : "text-sm"} capitalize`}>32 {fetchWord('followers', lang)}</p>
      </div>
      {hideFollow ? null :
        <div className='ltr:ml-auto rtl:mr-auto'>
          <FollowBtn />
        </div>
      }
    </div>)
}
