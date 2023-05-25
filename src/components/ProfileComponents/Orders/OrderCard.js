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
        return <span className="w-full text-[10px] text-center border-green-500 text-green-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Canceled":
        return <span className="w-full text-[10px] text-center border-red-500 text-red-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Pending":
        return <span className="w-full text-[10px] text-center border-yellow-500 text-yellow-500 p-2 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
    }
  }
  return (
    <div className='bg-bmain py-2 px-4 mb-6 text-[10px]'>
      <ul className='flex items-start justify-between pt-2'>
        <li className="flex flex-col max-w-[25%] capitalize">
          <strong className="text-secondary">{fetchWord('Order_date', lang)}</strong>
          <span className="text-[9px]">23 september 20222</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('order_summary', lang)}</strong>
          <span className="text-[9px]">2 products,2 deliveries</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('Buyer', lang)}</strong>
          <span className="text-[9px]">Buyer Name</span>
        </li>
        <li className="flex flex-col max-w-[25%]  capitalize">
          <strong className="text-secondary">{fetchWord('Amount_total', lang)}</strong>
          <span className="text-[9px]">1256$</span>
        </li>
      </ul>
      <div className='bg-white p-2 my-4 flex justify-between items-center'>
        <div className='ltr:pr-3 rtl:pl-3'>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[55px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xs">Product Name</h3>
              <p className="text-[#666666] text-[10px]">Because we have many types of elements</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[55px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xs">Product Name</h3>
              <p className="text-[#666666] text-[10px]">Because we have many types of elements</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mb-4'>
            <figure className='w-[55px] shrink-0'>
              <Image src="/images/products/2.png" alt={"product 1"} height={180} width={120} className="max-w-full object-contain !w-full !h-auto" />
            </figure>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-xs">Product Name</h3>
              <p className="text-[#666666] text-[10px]">Because we have many types of elements</p>
            </div>
          </div>
        </div>
        <div className='w-[120px] flex px-2 flex-col gap-2 items-center'>
          {
            displayStatus('Pending')
          }
          <Button onClick={() => setOrderDetails(true)} classes="whitespace-nowrap !text-[10px] border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('More_details', lang)}</Button>
        </div>
      </div>
    </div>
  )
}
