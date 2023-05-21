import { Button } from '@/components/Global/Button/Button';
import { DeleteIcon, EditIcon } from '@/components/Icons';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const ProductsTable = ({ products }) => {
  console.log(products)
  console.log(products)
  const { lang } = useContext(LanguageContext)
  return (
    <table className="w-full">
      <thead className="bg-[#EFF7FF] px-2">
        <tr className="ltr:text-left rtl:text-right text-[#363636] capitalize">
          <th className="p-2 whitespace-nowrap">{fetchWord('Product_code', lang)}</th>
          <th className="p-2 whitespace-nowrap">{fetchWord('Product_name', lang)}</th>
          <th className="p-2 whitespace-nowrap">{fetchWord('Product_description', lang)}</th>
          <th className="min-w-[140px] p-2 whitespace-nowrap">{fetchWord('Product_price', lang)}</th>
          <th className="p-2 whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody>
        {
          products?.map(product => (
            <tr key={product?.order_number} className="border-b px-2 hover:bg-gray-100 cursor-pointer">
              <td className="p-2">{product?.id}</td>
              <td className="p-2">{product?.name}</td>
              <td className="p-2">{product?.description}</td>
              <td className="p-2">{product?.price}</td>
              <td className="p-2">
                <div className="flex gap-2">
                <Button classes="!p-1 !text-xs"><DeleteIcon /> </Button>
                <Button classes="!p-1 !text-xs" outline><EditIcon /> </Button>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
