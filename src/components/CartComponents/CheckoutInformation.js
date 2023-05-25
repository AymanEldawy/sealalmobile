import React from 'react'
import { CartHead } from './CartHead'
import { CartItem } from './CartItem'
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { CartBar } from './CartBar';
import { PromoCode } from './PromoCode';
import PrimaryLink from '../Global/PrimaryLink/PrimaryLink';
import { fetchWord } from '@/lang/fetchWord';
import { Button } from '../Global/Button/Button';

export const CheckoutInformation = ({
  total,
  subtotal,
  cart,
  msg,
  error,
  code,
  setCode,
  applyCode,
  setStage,

}) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mb-12 mt-8'>
      <div className='my-8 border-[#ECECEC] border p-4'>
        {cart?.map(item => (
          <CartItem key={item?.id} item={item} />
        ))}
      </div>
      <PromoCode msg={msg} error={error} code={code} setCode={setCode} applyCode={applyCode} />
      <CartBar total={total} subtotal={subtotal} />
          <div className='flex flex-1 items-center justify-between text-lg font-semibold text-[#3D3D3D] border border-[#ECECEC] p-2 rounded-md gap-12'>
            <span>{fetchWord('Total', lang)}</span>
            <span>${total + 20}</span>
          </div>
          <Button classes="!p-2 mt-4 block w-full mx-auto min-w-[300px]" onClick={() => setStage("address")}>{fetchWord('Continue', lang)} </Button>
    </div>
  )
}
