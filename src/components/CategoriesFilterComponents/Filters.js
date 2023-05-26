import React, { useContext, useState } from 'react'
import { FilterColors } from './FilterColors'
import { brands, colors, sizes } from '@/data/dummyData'
import { FilterSizes } from './FilterSizes'
import FilterPrice from './FilterPrice'
import { FilterBrands } from './FilterBrands'
import { CategoriesKeywords } from './CategoriesKeywords'
import { Button } from '../Global/Button/Button'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

export const Filters = ({ setOpenFilter }) => {
  const {lang} = useContext(LanguageContext)
  const [activeKeywords, setActiveKeywords] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [values, setValues] = useState([0, 250])
  // insertIntoColors
  const insertIntoColors = (colorId) => {
    if (selectedColors?.includes(colorId)) {
      setSelectedColors(prev => prev?.filter(color => color !== colorId))
    }
    else setSelectedColors(prev => [...prev, colorId])
  }
  const insertIntoSizes = (sizeId) => {
    if (selectedSizes?.includes(sizeId)) {
      setSelectedSizes(prev => prev?.filter(size => size !== sizeId))
    }
    else setSelectedSizes(prev => [...prev, sizeId])
  }
  const insertIntoBrands = (brandId) => {
    if (selectedBrands?.includes(brandId)) {
      setSelectedBrands(prev => prev?.filter(brand => brand !== brandId))
    }
    else setSelectedBrands(prev => [...prev, brandId])
  }
  const onChangePrice = (value) => {
    setValues(value)
  }
  const applyFilters = () => {
    setOpenFilter(false)
  }

  return (
    <div className='flex flex-col gap-4'>
      <CategoriesKeywords activeKeywords={activeKeywords} setActiveKeywords={setActiveKeywords} />
      <FilterColors selectedColors={selectedColors} colors={colors} insertIntoColors={insertIntoColors} />
      <FilterSizes selectedSizes={selectedSizes} sizes={sizes} insertIntoSizes={insertIntoSizes} />
      <FilterPrice onChangePrice={onChangePrice} values={values} max={600} />
      <FilterBrands brands={brands} selectedBrands={selectedBrands} insertIntoBrands={insertIntoBrands} />
      <div className='flex gap-2 mb-8'>
        <Button onClick={() => setOpenFilter(false)} outline classes="flex-1">{fetchWord('cancel', lang)}</Button>
        <Button onClick={applyFilters} classes="flex-1">{fetchWord('apply', lang)}</Button>
      </div>
    </div>
  )
}
