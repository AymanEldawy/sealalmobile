import React, { useContext, useState } from 'react'
import { FilterTitle } from './FilterTitle'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';

export const FilterBrands = ({ brands, selectedBrands, insertIntoBrands }) => {
  const { lang } = useContext(LanguageContext);
  const [search, setSearch] = useState('');
  const [filterBrandsList, setFilterBrandsList] = useState(brands);

  const handleSearchFilter = (e) => {
    let key = e.target.value
    setSearch(key)
    let newList = brands?.filter(brand => {
      return brand?.brand?.toLocaleLowerCase()?.startsWith(key?.toLocaleLowerCase())
    })
    setFilterBrandsList(newList)
  }

  return (
    <div className='mb-8'>
      <FilterTitle title={fetchWord('brands', lang)} />
      <div className='px-4'>
        <input type="search" placeholder={fetchWord('search', lang)} value={search}  onChange={handleSearchFilter} className='border-2 rounded-3xl p-1 px-4 w-full text-xs' />
        <ul className='mt-4 flex flex-col gap-2 max-h-[320px] overflow-auto scroll-hide'>
          {filterBrandsList?.map(brand => (
            <li key={brand?.id} onClick={() => insertIntoBrands(brand?.id)} className="cursor-pointer flex gap-4 items-center relative w-full">
              <span className={`border relative w-5 h-5 border-gray-200 bg-white before:absolute before:w-[60%] before:h-[60%] before:top-[20%] before:left-[20%] ${selectedBrands?.includes(brand?.id) ? "before:bg-primary" : ""}`}></span>
              <span className='text-sm'>{brand?.brand}</span>
              <span className='ltr:ml-auto rtl:mr-auto'>{brand?.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
