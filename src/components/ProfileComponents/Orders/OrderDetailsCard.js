import { Button } from '@/components/Global/Button/Button';
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react'

export const OrderDetailsCard = ({ isSeller, order }) => {
  const { lang } = useContext(LanguageContext);
  const displayStatus = (status) => {
    switch (status) {
      case "Delivered":
        return <span className="text-[10px] border-green-500 bg-gray-100 text-green-500 p-1 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Canceled":
        return <span className="text-[10px] border-red-500 text-red-500 p-1 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
      case "Pending":
        return <span className="text-[10px] border-yellow-500 text-yellow-500 p-1 rounded-md border font-semibold">{fetchWord(status, lang)}</span>
    }
  }
  return (
    <div className='bg-bmain py-2 px-4 mb-6 text-[10px] -mx-2'>
      <div className='flex justify-between items-center gap-4'>
        <ul className='flex items-start pt-2 gap-4 flex-1'>
          <li className="flex flex-col capitalize">
            <strong className="text-secondary whitespace-nowrap text-xs">{fetchWord('Order_date', lang)}</strong>
            <span>23 september 20222</span>
          </li>
          {
            isSeller ? (
              <li className="flex flex-col  capitalize">
                <strong className="text-secondary whitespace-nowrap text-xs">{fetchWord('buyer_name', lang)}</strong>
                <span>Buyer name</span>
              </li>
            ) : (
              <li className="flex flex-col  capitalize">
                <strong className="text-secondary whitespace-nowrap text-xs">{fetchWord('Company_name', lang)}</strong>
                <span>Company name</span>
              </li>
            )
          }
        </ul>
        <div className='justify-end flex items-center'>
          {
            isSeller ?
              <Button classes="!text-[10px] !p-1 border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white ">{fetchWord('Cancel_the_order', lang)}</Button>
              :
              <Button classes="!text-[10px] !p-1 border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white ">{fetchWord('Send_invoice', lang)}</Button>
          }
        </div>
      </div>
      <div className='bg-white p-2 my-4 flex justify-between items-center gap-4'>
        <div className='flex items-start gap-4 flex-1'>
          <figure className='w-[45px] shrink-0'>
            <Image src="/images/products/2.png" alt={"product 1"} height={75} width={45} className="max-w-full object-contain !w-full !h-auto" />
          </figure>
          <div className="flex flex-col gap-2">
            <div className='flex items-center gap-4 text-xs'>
              <h3 className="font-semibold whitespace-nowrap">Product Name</h3>
              <strong className='text-secondary'>125$</strong>
            </div>
            <p className="text-[#666666] text-[10px]">Because we have many types of elements</p>
            {
              isSeller ?
                <Button classes="border-primary bg-transparent border text-[9px] w-fit !p-1 whitespace-nowrap font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('product_statues', lang)}</Button>
                :
                <Button classes="border-primary bg-transparent border text-[9px] w-fit !p-1 whitespace-nowrap font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('Evaluate_the_product', lang)}</Button>
            }
          </div>
        </div>
        <div className=' flex gap-2 flex-col w-[100px] items-center flex-1 justify-between'>
          {
            displayStatus('Delivered')
          }
          <Button classes="!text-[9px] !p-1 border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('Delivered_details', lang)}</Button>
        </div>
      </div>
    </div>
  )
}
