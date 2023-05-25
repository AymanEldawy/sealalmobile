import { CartAddress } from '@/components/CartComponents/CartAddress'
import { CheckoutInformation } from '@/components/CartComponents/CheckoutInformation'
import { CartPayment } from '@/components/CartComponents/Payment/CartPayment'
import { Layout } from '@/components/Layout/Layout'
import TabsContent from '@/components/Tabs/TabsContent'
import { GlobalOptions } from '@/context/GlobalOptions'
import { LanguageContext } from '@/context/LangContext'
import { paymentsBank } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'

const stages = {
  checkout: { stage: 1, stageName: "checkout" },
  address: { stage: 2, stageName: "address" },
  payment: { stage: 3, stageName: "payment" },
  confirm: { stage: 4, stageName: "confirm" },
}

const Checkout = () => {
  const { lang } = useContext(LanguageContext);
  const { cart, removeFromCart } = useContext(GlobalOptions);
  const [loading, setLoading] = useState();
  const [total, setTotal] = useState(0)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('');
  const [selectedPaymentCard, setSelectedPaymentCard] = useState(null);
  const [stage, setStage] = useState(stages?.checkout);
  const [subtotal, setSubtotal] = useState(0)
  useEffect(() => {
    let total = cart?.reduce((result, cur) => {
      return result += cur?.price * cur?.quantity
    }, 0)
    setSubtotal(total)
    setTotal(total)
  }, [cart])

  const applyCode = (e) => {
    e.preventDefault()
    if (code === 'monga') {
      setTotal(prev => prev - 50)
      setMsg('congratulation!,You got a 50$ discount')
      setError('')
    }
    else {
      setMsg('')
      setError('Oops! invalid promo code')
    }
  }
  const selectedStage = (tab) => {
    setStage(stages?.[tab])
  }
  console.log(subtotal)
  const handleBack = () => {
    setStage(Object.values(stages)?.[stage?.stage - 2])
  }


  return (
    <Layout containerClassName="pb-3 before:border-b before:absolute before:-left-4 before:w-screen before:h-[1px] before:-bottom-1 !overflow-visible" hideSearch title={fetchWord('checkout', lang)} hideIcons handleBack={stage?.stageName !== 'checkout' ? handleBack : undefined}>
      <TabsContent activeTabName={stage?.stageName}>
        <CheckoutInformation
          subtotal={subtotal}
          total={total}
          msg={msg}
          error={error}
          code={code}
          setCode={setCode}
          applyCode={applyCode}
          cart={cart}
          tabName={stages?.checkout?.stageName}
          setStage={selectedStage}
           />
        <CartAddress tabName={stages?.address?.stageName} setStage={selectedStage} />
        <CartPayment
          subtotal={subtotal}
          total={total}
          cart={cart}
          banks={paymentsBank}
          selectedPaymentCard={selectedPaymentCard}
          setSelectedPaymentCard={setSelectedPaymentCard}
          stage={stage}
          tabName={stages?.payment?.stageName}
          setStage={selectedStage} />
      </TabsContent>

    </Layout>
  )
}

export default Checkout