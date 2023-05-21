import { Button } from '@/components/Global/Button/Button'
import { DeleteIcon, EditIcon } from '@/components/Icons'
import Image from 'next/image'
import React from 'react'

export const SellerProductCard = ({ product }) => {
  return (
    <div className='flex items-center justify-between border border-[#ECECEC] p-4 flex-wrap md:gap-4 lg:gap-8'>
      <div className="flex gap-4 items-center flex-[4] min-w-[250px] max-w-[500px]">
        <Image src={product?.image} alt={product?.name} height={182} width={143} className='object-contain' />
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-lg'>{product?.name}</h3>
          <p className="text-lead">{product?.description}</p>
          <strong>${product?.price}</strong>
        </div>
      </div>
      <span className="w-[120px] font-semibold text-lg">{product?.stock}</span>
      <div className="flex  gap-2 w-[120px]">
        <Button classes="!p-1 !text-xs"><DeleteIcon /> </Button>
        <Button classes="!p-1 !text-xs" outline><EditIcon /> </Button>
      </div>
    </div>
  )
}
