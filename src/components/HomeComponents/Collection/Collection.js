import React, { useState } from 'react'
import { CollectionSubCategories } from './CollectionSubCategories/CollectionSubCategories'
import { CollectionProducts } from './CollectionProducts/CollectionProducts'
import { categories, products } from '@/data/dummyData'

export const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <div className='pt-8 pb-20 -mt-[120px]'>
      <CollectionSubCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <CollectionProducts filterProducts={products} />
    </div>
  )
}
