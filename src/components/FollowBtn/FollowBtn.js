import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { Button } from '../Global/Button/Button'

export const FollowBtn = ({ small }) => {
  const { lang } = useContext(LanguageContext);
  const [isFollow, setIsFollow] = useState(false)
  return (
    <>
      {isFollow ?
        <button onClick={() => setIsFollow(false)} className={`text-[#B9B9B9] border border-[#B9B9B9] bg-white rounded-3xl p-[2px] px-2 capitalize mx-2 ${small ? "text-[10px]" : "text-xs"}`} outline>{fetchWord('following', lang)}</button>
        :
        <Button onClick={() => setIsFollow(true)} classes={`!p-[2px] mx-2 !rounded-3xl !px-2 ${small ? "text-[10px]" : "text-xs"}`} outline>{fetchWord('follow', lang)}</Button>}
    </>

  )
}
