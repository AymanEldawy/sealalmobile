import { CollectionSubCategories } from '@/components/HomeComponents/Collection/CollectionSubCategories/CollectionSubCategories'
import { FlashSaleBanner } from '@/components/HomeComponents/FlashSaleBanner/FlashSaleBanner'
import { CategoryGridIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { ProductCard } from '@/components/Product/ProductCard'
import { categories, products } from '@/data/dummyData'
import React, { useEffect, useState } from 'react'

const Sale = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[3]);
  const [viewAs, setViewAs] = useState('grid');
  // actions
  const toggleView = () => {
    setViewAs(prev => prev === 'grid' ? "list" : "grid")
  }
  return (
    <Layout hideNotificationIcon extraIcons={<button onClick={toggleView}><CategoryGridIcon view={viewAs} /></button>}>
      <FlashSaleBanner containerClassName="!translate-y-0 mb-6" />
      <CollectionSubCategories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className={`grid gap-4 ${viewAs === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}`}>
        {
          products?.map(product => (
            <ProductCard size={viewAs !== 'grid' ? "large" : ''} product={product} key={product?.id} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Sale