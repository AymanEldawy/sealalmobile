import { CartAddress } from '@/components/CartComponents/CartAddress'
import { CartPayment } from '@/components/CartComponents/Payment/CartPayment'
import { Layout } from '@/components/Layout/Layout'
import TabsContent from '@/components/Tabs/TabsContent'
import { GlobalOptions } from '@/context/GlobalOptions'
import { LanguageContext } from '@/context/LangContext'
import { paymentsBank } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'
const stages = {
  // cart: { stage: 1, stateName: "cart" },
  address: { stage: 2, stateName: "address" },
  payment: { stage: 3, stateName: "payment" },
  confirm: { stage: 4, stateName: "confirm" },
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
  const [stage, setStage] = useState(stages?.address);
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


  return (
    <Layout hideSearch title={fetchWord('checkout', lang)} hideIcons >

      <TabsContent activeTabName={stage?.stateName}>
        <CartAddress tabName={stages?.address?.stateName} setStage={selectedStage} />
        <CartPayment
          subtotal={subtotal}
          total={total}
          cart={cart}
          banks={paymentsBank}
          selectedPaymentCard={selectedPaymentCard}
          setSelectedPaymentCard={setSelectedPaymentCard}
          stage={stage}
          tabName={stages?.payment?.stateName}
          setStage={selectedStage} />
      </TabsContent>

    </Layout>
  )
}

export default Checkout