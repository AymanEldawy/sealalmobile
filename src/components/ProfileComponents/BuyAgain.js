import React from 'react'
import { ProfileTitle } from './ProfileTitle'
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { products } from '@/data/dummyData';
import { ProductCard } from '../Product/ProductCard';

export const BuyAgain = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div>
      <ProfileTitle title={fetchWord('Buy_again', lang)} />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
          products?.map(product => (
            <ProductCard product={product} key={product?.id} />
          ))
        }
      </div>
    </div>
  )
}
