import React, { useContext, useState } from 'react'
import { ProfileTitle } from '../ProfileTitle'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { StoreCard } from './StoreCard';
import { SingleStore } from './SingleStore';

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
            <ProfileTitle title={fetchWord('Stores_follow', lang)} />
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
