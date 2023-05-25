import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { ProfileTitle } from '../ProfileTitle'
import { SingleStore } from './SingleStore';
import { StoreCard } from './StoreCard';

export const Stores = () => {
  const { lang } = useContext(LanguageContext);
  const [stage, setStage] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  return (
    <div>
      {
      !!selectedStore ? (
          <SingleStore setSelectedStore={setSelectedStore}  store={selectedStore} />
        ) : (
          <>
            <div className='grid gap-4 md:grid-cols-2'>
              <StoreCard setSelectedStore={setSelectedStore} />
              <StoreCard setSelectedStore={setSelectedStore} />
              <StoreCard setSelectedStore={setSelectedStore} />
              <StoreCard setSelectedStore={setSelectedStore} />
            </div>
          </>
        )
      }
    </div>
  )
}
