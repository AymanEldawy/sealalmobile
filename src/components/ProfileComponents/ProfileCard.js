import React from 'react'
import Image from 'next/image';
import { Button } from '../Global/Button/Button';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { SortBy } from '../CategoriesFilterComponents/SortBy';
import { ViewAs } from '../CategoriesFilterComponents/ViewAs';
import { fetchWord } from '@/lang/fetchWord';
import { StoreAvatarInfo } from './StoreAvatarInfo';

export const ProfileCard = ({ sortBy, setSortBy, activeView, setActiveView }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <StoreAvatarInfo  />
      <div className="flex gap-4 items-center">
        <SortBy setSortBy={setSortBy} sortBy={sortBy} />
        <ViewAs activeView={activeView} setActiveView={setActiveView} />
      </div>
    </div>
  )
}
