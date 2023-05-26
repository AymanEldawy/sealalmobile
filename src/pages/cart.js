import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { CartIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { LoadingBar } from '@/components/LoadingBar/LoadingBar'
import { ProductCard } from '@/components/Product/ProductCard'
import { GlobalOptions } from '@/context/GlobalOptions'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useState, useEffect, useContext } from 'react'

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, removeFromCart } = useContext(GlobalOptions)
  const { lang } = useContext(LanguageContext);
  const [favorites, setFavorites] = useState([])
  useEffect(() => {
    setLoading(true)
    setFavorites(products?.filter(product => product?.favorite))
    setLoading(false)
  }, [])
  return (
    <Layout containerClassName="!justify-center pb-3 before:border-b before:absolute before:-left-4 before:w-screen before:h-[1px] before:-bottom-1 !overflow-visible" hideIcons hideSearch hideNotificationIcon title={fetchWord('my_cart', lang)}>
      {!loading ? (
        <>
          {
            cart?.length ? (
              <>
                <div className='mb-12 mt-8'>
                  {cart?.map(item => (
                    <div className='mb-8' key={item?.id}>
                      <ProductCard removeFromCart={removeFromCart} hideReview grid size="large" product={item} />
                    </div>
                  ))}
                </div>
                <PrimaryLink link="checkout" className="!w-full block max-w-[300px] mx-auto rounded-3xl" >{fetchWord('checkout', lang)}</PrimaryLink>
              </>
            )
              : (
                <>
                  <div className="h-full -mx-4 flex items-center justify-center flex-col gap-4 bg-[#F1F1F1] py-12 mb-12">
                    <CartIcon className="stroke-[4px] h-24 w-24 text-[#D9D9D9]" />
                    <p className="text-sm font-medium">{fetchWord('cart_empty_msg', lang)}</p>
                    <PrimaryLink link="/" className="rounded-3xl px-4 py-2 text-sm">{fetchWord('Start_shopping', lang)}</PrimaryLink>
                  </div>
                  {favorites?.length ? (
                    <div className=''>
                      <h3 className='font-semibold capitalize pb-2 border-b mb-4'>{fetchWord('favorites', lang)}</h3>
                      {favorites?.map(item => (
                        <div className='mb-8' key={item?.id}>
                          <ProductCard grid size="large" product={item} />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </>
              )


          }
        </>
      ) : <LoadingBar />
      }
    </Layout>
  )
}

export default Cart