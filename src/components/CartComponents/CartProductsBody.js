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

export const CartProductsBody = ({
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
    <div className='mb-12 mt-20'>
      <CartHead />
      <div className='mt-8 border-[#ECECEC] border p-4'>
        {cart?.map(item => (
          <CartItem key={item?.id} item={item} />
        ))}
      </div>
      <CartBar total={total} subtotal={subtotal} />
      <div className="flex gap-8 justify-center items-end lg:max-w-[80%] mx-auto mt-8">
        <PromoCode msg={msg} error={error} code={code} setCode={setCode} applyCode={applyCode} />
        <div className="flex gap-4 items-end flex-1 justify-between">
          <div className='flex flex-1 items-center justify-center min-w-[200px] font-semibold text-[#3D3D3D] border border-[#ECECEC] p-2 rounded-md gap-12'>
            <span>{fetchWord('Total', lang)}</span>
            <span>${total + 20}</span>
          </div>
          <Button classes="!p-2 min-w-[210px]" onClick={() => setStage("address")}>{fetchWord('checkout', lang)} </Button>
        </div>
      </div>
    </div>
  )
}
