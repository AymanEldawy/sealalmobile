import SectionTitle from '@/components/Global/SectionTitle/SectionTitle'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'

export const PopularProducts = ({ title }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='my-8'>
      <SectionTitle title={title} link="/" />
      <div className='grid grid-cols-5 gap-4'>
        {products?.slice(0, 5)?.map(product => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  )
}