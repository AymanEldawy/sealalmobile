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
          <th className="p-1 text-xs whitespace-nowrap">
            <input type="checkbox" className='accent-primary' />
          </th>
          <th className="p-1 text-xs whitespace-nowrap">{fetchWord('code', lang)}</th>
          <th className="p-1 text-xs whitespace-nowrap">{fetchWord('name', lang)}</th>
          <th className="p-1 text-xs whitespace-nowrap">{fetchWord('description', lang)}</th>
          <th className="p-1 text-xs whitespace-nowrap">{fetchWord('price', lang)}</th>
        </tr>
      </thead>
      <tbody>
        {
          products?.map(product => (
            <tr key={product?.order_number} className="border-b px-2 hover:bg-gray-100 cursor-pointer">
              <td className="p-1 font-medium text-[10px]">            <input type="checkbox" className='accent-primary' />
              </td>
              <td className="p-1 font-medium text-[10px]">{product?.id}</td>
              <td className="p-1 font-medium text-[10px]">{product?.name}</td>
              <td className="p-1 font-medium text-[10px]">{product?.description}</td>
              <td className="p-1 font-medium text-[10px]">
                <div className="flex gap-2 items-center text-xs">
                  {product?.price}
                  <Button classes="!p-1 !text-[10x]" outline><EditIcon className="w-3 h-3" /> </Button>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
