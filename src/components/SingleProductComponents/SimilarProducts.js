import React, { useContext } from 'react'
import { ProductCard } from '../Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { products } from '@/data/dummyData'
import Link from 'next/link'
import { Grid } from '../Grid/Grid'

export const SimilarProducts = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mt-4 mb-16">
      <div className='flex justify-between'>
        <h3 className=' text-secondary font-semibold capitalize mb-4'>{fetchWord('similar_products', lang)}</h3>
        <Link href="/" className="text-primary text-sm capitalize">{fetchWord('more', lang)}</Link>
      </div>
      <Grid products={products} />
    </div>
  )
}
