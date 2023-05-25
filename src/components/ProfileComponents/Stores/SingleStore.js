import { ProductCard } from '@/components/Product/ProductCard';
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react'

import { ProfileTitle } from '../ProfileTitle';
import { StoreAvatarInfo } from '../StoreAvatarInfo';

export const SingleStore = ({ setSelectedStore, store }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className=''>
      <div className='bg-bmain p-4'>
        <StoreAvatarInfo hideFollow />
        <p className="mt-4 text-sm">
          {fetchWord('Use_License_desc', lang)}
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-8'>
        {
          products?.map(product => (
            <ProductCard size="large" product={product} key={product?.id} />
          ))
        }
      </div>

    </div>
  )
}
