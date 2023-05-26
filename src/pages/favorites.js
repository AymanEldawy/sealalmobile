import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { HeartIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { LoadingBar } from '@/components/LoadingBar/LoadingBar'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'

const Favorites = () => {
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [refreshFavorite, setRefreshFavorite] = useState(false)
  const { lang } = useContext(LanguageContext)
  useEffect(() => {
    setLoading(true)
    setFavorites(products?.filter(product => product?.favorite))
    setLoading(false)
  }, [])
  const removeFromFavorite = (id) => {
    setFavorites(prev => prev?.filter(item => item?.id !== id))
  }
  return (
    <Layout>
      {!loading ? (
        <>
          {
            favorites?.length ? (
              <div className='mb-12 mt-8'>
                {favorites?.map(item => (
                  <div className='mb-8' key={item?.id} onClick={() => removeFromFavorite(item?.id)}>
                    <ProductCard grid size="large" product={item} />
                  </div>
                ))}

              </div>
            )
              :
              <div className="h-full flex items-center justify-center min-h-[70vh] flex-col gap-4">
                <HeartIcon className="stroke-[#F0F0F0] stroke-[4px] h-16 w-16 text-black" />
                <p className="text-sm font-medium">{fetchWord('favorite_msg', lang)}</p>
                <PrimaryLink link="/" className="rounded-3xl px-4 py-1 text-sm">{fetchWord('Start_shopping', lang)}</PrimaryLink>
              </div>

          }
        </>
      ) : <LoadingBar />
      }
    </Layout>
  )
}

export default Favorites