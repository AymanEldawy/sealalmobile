import React, { useState, useEffect, useContext } from 'react'
import { ProfileTitle } from '../ProfileTitle'
import { ViewAs } from '../../CategoriesFilterComponents/ViewAs'
import { SortBy } from '../../CategoriesFilterComponents/SortBy'
import { OrdersTable } from './OrdersTable'
import { OrderSellerDetails } from './OrderSellerDetails'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { sellerOrders } from '@/data/dummyData'
import { OrderCard } from '../Orders/OrderCard'
import { OrderDetailsCard } from '../Orders/OrderDetailsCard'
import { SellerBar } from '../SellerBar'
import { Button } from '@/components/Global/Button/Button'

const list = [
  "All",
  "Completed",
  "Canceled",
]
export const SellerOrders = () => {
  const [orderDetails, setOrderDetails] = useState();
  const [orders, setOrders] = useState();
  const { lang } = useContext(LanguageContext);
  useEffect(() => {
    setOrders(sellerOrders)
  }, [])
  return (
    <div className="ltr:pl-4 rtl:pr-4">
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord('orders', lang)} />
        <div className="">
          <SortBy />
        </div>
      </div>
      {
        !!orderDetails ? (
          <>
            <div className="mb-4 justify-between bg-[#F4F4F4] p-4 items-center gap-4 w-full flex">
              <strong className='text-secondary capitalize'>{fetchWord('order_details', lang)}</strong>
              <Button classes="text-sm" outline>{fetchWord('make_it_done', lang)}</Button>
            </div>
            <OrderDetailsCard isSeller order={orderDetails} />
          </>
        ) : (
          <div className=''>
            <OrdersTable orders={orders} setOrderDetails={setOrderDetails} />
            <OrderCard setOrderDetails={setOrderDetails} />
          </div>
        )
      }

    </div>
  )
}
