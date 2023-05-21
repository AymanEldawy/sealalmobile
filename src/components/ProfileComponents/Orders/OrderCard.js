import { LanguageContext } from '@/context/LangContext'
import React, { useContext } from 'react'
import Image from 'next/image';
import { fetchWord } from '@/lang/fetchWord';
import { Button } from '@/components/Global/Button/Button';

export const OrderCard = ({ setOrderDetails }) => {
  const { lang } = useContext(LanguageContext);
  const displayStatus = (status) => {
    switch (status) {
      case "Delivered":
        return <span className="border-green-500 text-green-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Canceled":
        return <span className="border-red-500 text-red-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Pending":
        return <span className="border-yellow-500 text-yellow-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
    }
  }
  return (
    <div className='bg-bmain py-2 px-4 mb-6'>
      <ul className='flex items-center justify-between pt-2'>
        <li className="flex flex-col max-w-[25%] capitalize">
          <strong className="text-secondary">{fetchWord('Order_date', lang)}</strong>
          <span>23 september 20222</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('order_summary', lang)}</strong>
          <span>2 products,2 deliveries</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('Buyer', lang)}</strong>
          <span>Buyer Name</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('Amount_total', lang)}</strong>
          <span>1256$</span>
        </li>
      </ul>
      <div className='bg-white p-4 my-4 flex justify-between items-center'>
        <div className=''>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[120px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Product Name</h3>
              <p className="text-[#666666] text-sm">Because we have many types of elements</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[120px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Product Name</h3>
              <p className="text-[#666666] text-sm">Because we have many types of elements</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[120px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xl">Product Name</h3>
              <p className="text-[#666666] text-sm">Because we have many types of elements</p>
            </div>
          </div>
        </div>
        <div className=' flex gap-2 items-center'>
          {
            displayStatus('Pending')
          }
          <Button onClick={() => setOrderDetails(true)} classes="border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('More_details', lang)}</Button>
        </div>
      </div>
    </div>
  )
}
