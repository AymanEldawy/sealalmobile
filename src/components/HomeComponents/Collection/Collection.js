import React, { useState } from 'react'
import { CollectionSubCategories } from './CollectionSubCategories/CollectionSubCategories'
import { categories, products } from '@/data/dummyData'
import { Grid } from '@/components/Grid/Grid'

export const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name)
  return (
    <div className=' pb-12 '>
      <CollectionSubCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Grid products={products} />
    </div>
  )
}
