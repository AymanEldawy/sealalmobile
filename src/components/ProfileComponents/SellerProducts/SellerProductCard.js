import { Button } from '@/components/Global/Button/Button'
import { DeleteIcon, EditIcon } from '@/components/Icons'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export const SellerProductCard = ({ product }) => {
  const {lang} = useContext(LanguageContext)
  return (
    <div className='flex items-center justify-between border border-[#ECECEC] p-2 flex-wrap md:gap-4 lg:gap-8'>
      <div className="flex gap-4 items-start flex-[4]">
        <Image src={product?.image} alt={product?.name} height={100} width={80} className='object-contain' />
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-sm'>{product?.name}</h3>
          <p className="text-lead text-xs">{product?.description}</p>
          <div className='flex gap-2 items-center justify-between'>
            <strong>${product?.price}</strong>
            <span className=" font-semibold text-sm capitalize ">{fetchWord('stock', lang)} {product?.stock}</span>
            <div className="flex  gap-2 ">
              <Button classes="!p-1 !text-xs"><DeleteIcon className="w-4 h-4" /> </Button>
              <Button classes="!p-1 !text-xs" outline><EditIcon className="w-4 h-4" /> </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
