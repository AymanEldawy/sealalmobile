import React, { useContext } from 'react'

import { CartStepsBar } from '../CartStepsBar'
import { PaymentCardList } from './PaymentCardList'
import { OrderSummary } from '../OrderSummary'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

export const CartPayment = ({ subtotal, total, cart, banks, stage, selectedPaymentCard, setSelectedPaymentCard }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="my-12">
      <CartStepsBar stage={stage} />
      <h2 className="capitalize text-lg text-secondary font-semibold my-12">{fetchWord('payment', lang)}</h2>
      <div className="flex gap-8">
        <PaymentCardList
          banks={banks}
          selectedPaymentCard={selectedPaymentCard}
          setSelectedPaymentCard={setSelectedPaymentCard}
        />
        <div className='flex-1'>
          <OrderSummary cart={cart} total={total} subtotal={subtotal} />
        </div>

      </div>
    </div>
  )
}
