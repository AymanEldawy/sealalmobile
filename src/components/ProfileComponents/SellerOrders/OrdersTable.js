import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const OrdersTable = ({ orders, setOrderDetails }) => {
  console.log(orders)
  const { lang } = useContext(LanguageContext)
  return (
    <table className="w-full">
      <thead className="bg-[#EFF7FF] px-2">
        <tr className="ltr:text-left text-xs rtl:text-right text-[#363636] capitalize">
          <th className="p-1">{fetchWord('order_number', lang)}</th>
          <th className="p-1">{fetchWord('product_name', lang)}</th>
          <th className="p-1">{fetchWord('quantity', lang)}</th>
          <th className="p-1">{fetchWord('address_details', lang)}</th>
        </tr>
      </thead>
      <tbody>
        {
          orders?.map(order => (
            <tr key={order?.order_number} className="border-b px-2 hover:bg-gray-100 cursor-pointer" onClick={() => setOrderDetails(order?.order_number)}>
              <td className="p-1 text-[10px]">{order?.order_number}</td>
              <td className="p-1 text-[10px]">{order?.product_name}</td>
              <td className="p-1 text-[10px]">{order?.quantity}</td>
              <td className="p-1 text-[10px]">{order?.address_details?.address}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
