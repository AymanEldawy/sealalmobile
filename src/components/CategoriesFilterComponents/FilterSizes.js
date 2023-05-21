import React, { useContext } from 'react'
import { FilterTitle } from './FilterTitle'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'

export const FilterSizes = ({ sizes, insertIntoSizes, selectedSizes }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className='mt-4 border-b pb-2'>
      <FilterTitle title={fetchWord('sizes', lang)} />
      <div className='grid grid-cols-4 lg:grid-cols-5 gap-2 px-4'>
        {
          sizes?.map(size => (
            <button
              key={size?.id}
              className={`p-1 px-2 text-center rounded-md relative border  ${selectedSizes?.includes(size?.id) ? "bg-primary text-white" : ""}`}
              onClick={() => insertIntoSizes(size?.id)}>
              {size?.size}
            </button>
          ))
        }
      </div>
    </div>
  )
}
