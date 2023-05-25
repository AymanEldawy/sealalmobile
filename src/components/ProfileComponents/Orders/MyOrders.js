import TabsList from '@/components/Tabs/TabsList'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { SellerBar } from '../SellerBar';
import { OrderCard } from './OrderCard';
import { OrderDetailsCard } from './OrderDetailsCard';

const list = [
  "All",
  "Completed",
  "Pending",
  "Canceled",
]
export const MyOrders = () => {
  const { lang } = useContext(LanguageContext)
  const [activeTab, setActiveTab] = useState(list?.[0]);
  const [status, setStatus] = useState('All');
  const [orderDetails, setOrderDetails] = useState();
  const [orders, setOrders] = useState();

  return (
    <div>

      {
        !!orderDetails ? (
          <>
            <SellerBar />
            <OrderDetailsCard order={orderDetails} />
          </>
        ) : (
          <div className=''>
            <div className="border-[#D2D2D2] border-b flex items-center mb-4">
              {
                list.map(item => (
                  <button key={item} onClick={() => setStatus(item)} className={`text-[#CCCCCC] capitalize flex-1 text-center font-medium text-sm justify-center ${status === item ? "border-b-2 border-primary !text-primary -mb-[1px]" : ""}`}>{fetchWord(item, lang)}</button>
                ))
              }
            </div>
            <OrderCard setOrderDetails={setOrderDetails} />
          </div>
        )
      }
    </div >
  )
}
