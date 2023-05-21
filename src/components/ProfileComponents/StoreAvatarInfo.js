import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '../Global/Button/Button'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const StoreAvatarInfo = ({ small, hideFollow }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="flex gap-2 items-center">
      <figure className={`rounded-full ${small ? "w-12 h-12" : "w-16 h-16"}`}>
        <Image src="/images/profile-banner.png" alt="" width={66} height={66} className="rounded-full object-cover w-full h-full" />
      </figure>
      <div className="">
        <div className="flex gap-4">
          <h3 className={`${small ? 'text-base' : "text-lg"} text-secondary font-semibold capitalize`}>Store name</h3>
          {hideFollow ? null :
            <Button classes={`!py-0 !px-4 ${small ? "text-xs" : ""}`} outline>{fetchWord('follow', lang)}</Button>
          }
        </div>
        <p className={`text-[#2E2E2E] ${small ? 'text-xs' : "text-sm"} capitalize`}>32 {fetchWord('followers', lang)}</p>
      </div>
    </div>)
}
