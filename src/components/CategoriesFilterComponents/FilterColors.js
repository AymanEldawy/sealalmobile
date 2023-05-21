import React, { useContext } from 'react'
import { FilterTitle } from './FilterTitle'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'

export const FilterColors = ({ colors, insertIntoColors, selectedColors }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className='mt-4 border-b pb-2'>
      <FilterTitle title={fetchWord('colors', lang)} />
      <div className='grid grid-cols-4 lg:grid-cols-6 gap-2 px-4'>
        {
          colors?.map(color => (
            <button
              key={color?.id}
              style={{ backgroundColor: color?.color }}
              className={`h-5 w-5 rounded-full mb-3 relative scale-90 ${selectedColors?.includes(color?.id) ? " scale-100 before:border before:border-black before:absolute before:rounded-full before:-top-1 before:-left-1 before:-bottom-1 before:-right-1" : ""}`}
              onClick={() => insertIntoColors(color?.id)} />
          ))
        }
      </div>
    </div>
  )
}
