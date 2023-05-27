import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React from 'react'
import { useContext } from 'react';

import { SortBy } from '../CategoriesFilterComponents/SortBy';
import { ViewAs } from '../CategoriesFilterComponents/ViewAs';
import { Button } from '../Global/Button/Button';
import { StoreAvatarInfo } from './StoreAvatarInfo';
import { FilterIcon } from '../Icons';

export const ProfileCard = ({ sortBy, setSortBy, setOpenFilter, activeView, setActiveView }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <StoreAvatarInfo />
      <div className="flex gap-4 justify-between w-full border-t pt-3">
        {/* <h5 className='capitalize text-gray-700 text-xs font-medium'>{fetchWord('products', lang)}: 43</h5> */}
        <SortBy setSortBy={setSortBy} sortBy={sortBy} />
        <div className='flex gap-2'>
          <ViewAs activeView={activeView} setActiveView={setActiveView} />
          <Button onClick={() => setOpenFilter(true)} outline classes="!p-1"><FilterIcon /> </Button>
        </div>
      </div>
    </div>
  )
}
