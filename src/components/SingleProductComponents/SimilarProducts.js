import React, { useContext } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { products } from '@/data/dummyData'
import Link from 'next/link'

export const SimilarProducts = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mt-4 mb-16">
      <div className='flex justify-between'>
      <h3 className='text-xl text-secondary font-semibold capitalize mb-6'>{fetchWord('similar_products', lang)}</h3>
      <Link href="/" className="text-primary capitalize">{fetchWord('more', lang)}</Link>
      </div>
      <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {
          products?.slice(0, 5)?.map(product => (
            <ProductCard key={product?.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
