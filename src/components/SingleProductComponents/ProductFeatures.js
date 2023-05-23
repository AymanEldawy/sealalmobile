import { LanguageContext } from '@/context/LangContext'
import { phoneChart } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export const ProductFeatures = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mt-4'>
      <figure className='w-fit mx-auto my-4'>
        <Image src="/images/phone-chart.png" alt="phone-chart" height={414} width={352} />
      </figure>
      <h3 className='text-sm text-secondary font-medium mb-4'>Apple iPhone 11 64 GB Red Cell Phone Without Accessory Box (Apple Turkey Guaranteed)</h3>
      <ul className='list-disc text-[#3D3D3D] text-xs'>
        <li>
          <p className='leading-10'>2 years apple turkey warranty. The box includes iphone and usb-C to Lightning cable.</p>
        </li>
        <li>
          <p className='leading-10'>A maximum of 1 order can be made for this product. Trendyol reserves the right to cancel orders over 1 piece.</p>
        </li>
        <li>
          <p className='leading-10'>More than 100 stocks were offered to be sold at the campaign price .                                                                                      </p>
        </li>
        <li>
          <p className='leading-10'>A product can be sold by more than one seller. Sellers of products offered for sale by more than one seller are
            listed according to the price they set for the product, seller ratings, delivery status, promotions on the products,
            whether the cargo is free or not, whether the products can be delivered with fast delivery, and the stock and
            categories of the products.
          </p>
        </li>

      </ul>

      <h3 className='text-sm text-secondary font-medium mb-4 capitalize mt-4'>{fetchWord('features', lang)}</h3>
      <div className="flex text-xs justify-between gap-4 flex-col md:flex-row mb-4">
        <table className='flex-1 border-collapse'>
          <tbody>
            {phoneChart?.map((item, index) => (
              <tr key={index} className={index % 2 !== 0 ? "" : "bg-[#ECECEC]"}>
                <td className="text-[10px] font-medium px-4 py-2">{item?.name}</td>
                <td className="text-[10px] font-medium px-4 py-2 ltr:text-right rtl:text-left">{item?.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='flex-1 border-collapse'>
          <tbody>
            {phoneChart?.map((item, index) => (
              <tr key={index} className={index % 2 !== 0 ? "" : "bg-[#ECECEC]"}>
                <td className="text-[10px] font-medium px-4 py-2">{item?.name}</td>
                <td className="text-[10px] font-medium px-4 py-2 ltr:text-right rtl:text-left">{item?.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
