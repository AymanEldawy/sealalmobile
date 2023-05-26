import React, { useContext } from 'react'
import { CartStepsBar } from './CartStepsBar'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { ThumbUpIcon } from '../Icons'
import PrimaryLink from '../Global/PrimaryLink/PrimaryLink'

const ConfirmOrder = ({ stage }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mt-8">
      <CartStepsBar stage={stage} />
      <div className='flex flex-col gap-2 justify-center items-center h-140 mb-12'>
        <ThumbUpIcon className="w-20 h-20 text-green-500 " />
        <h3 className="text-green-500 font-semibold">{fetchWord('confirm_order_msg1', lang)}</h3>
        <p className="text-lead">{fetchWord('confirm_order_msg2', lang)}</p>
        <PrimaryLink link="/" className="!text-xs">{fetchWord('continue_shopping', lang)}</PrimaryLink>
      </div>
    </div>
  )
}

export default ConfirmOrder