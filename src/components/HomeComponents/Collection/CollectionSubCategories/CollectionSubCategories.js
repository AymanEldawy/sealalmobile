import React from 'react'

export const CollectionSubCategories = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex items-center justify-center gap-4 mb-4'>
      {categories?.slice(1, 8)?.map(category => (
        <button key={category} onClick={() => setSelectedCategory(category)} className={`text-[#737373] pb-2 ${selectedCategory === category ? 'font-semibold !text-primary border-b-2 border-primary' : ''}`}>{category}</button>
      ))}
    </div>
  )
}
