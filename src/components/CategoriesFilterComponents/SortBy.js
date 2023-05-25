import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext } from 'react'
import CustomSelectField from '../Forms/CustomSelectField'

const list = [
  { id: 1, name: "New" },
  { id: 1, name: "Old" },
  { id: 1, name: "Lower to max price" },
  { id: 1, name: "max to Lower price" },
]
export const SortBy = ({ sortBy, setSortBy, hideBorder }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className={`flex p-1 text-xs gap-2 ${hideBorder ? "fit-content !min-w-fit" : 'border border-secondary'} rounded-md shrink-0 min-w-[150px]'`}>
      <span className={`${hideBorder ? '!text-secondary' : 'text-primary'} font-semibold capitalize whitespace-nowrap`}>{fetchWord('sort_by', lang)}</span>
      <CustomSelectField
        placeholder={list?.[0]?.name}
        list={list}
        onChange={(e) => setSortBy(e.target.value)}
        containerClassName="!mb-0 "
        selectClassName="p-0 !border-none px-2"
        arrowClassName="!right-0 !-top-2"
      />
    </div>
  )
}
