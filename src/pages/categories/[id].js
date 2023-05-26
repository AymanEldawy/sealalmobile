import { Filters } from '@/components/CategoriesFilterComponents/Filters'
import { SortBy } from '@/components/CategoriesFilterComponents/SortBy'
import { CategoryGridIcon, ListViewIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { ProductCard } from '@/components/Product/ProductCard'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

const SingleCategory = () => {
  const { lang } = useContext(LanguageContext);
  const [openFilter, setOpenFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [viewAs, setViewAs] = useState('grid');

  // actions
  const toggleView = () => {
    setViewAs(prev => prev === 'grid' ? "list" : "grid")
  }



  return (
    <>
      {
        openFilter ? (
          <Layout handleBack={() => setOpenFilter(false)} containerClassName="" hideIcons hideNotificationIcon hideSearch title={fetchWord('filter', lang)}>
            <Filters setOpenFilter={setOpenFilter} />
          </Layout>
        ) : (
          <Layout hideNotificationIcon extraIcons={<button onClick={toggleView}><CategoryGridIcon view={viewAs} /></button>}>
            <div className='flex gap-4 items-center justify-between border-b pb-2 border-[#F1F1F1]'>
              <SortBy hideBorder sortBy={sortBy} setSortBy={setSortBy} />
              <button onClick={() => setOpenFilter(true)} className="capitalize relative flex gap-1 items-center text-secondary">
                <ListViewIcon className="text-secondary w-4 h-4" />
                {fetchWord('filter', lang)}
                <span className='text-[11px] bg-red-500 text-white rounded-lg px-[2px] leading-3 absolute -top-0 ltr:-right-2 rtl:-left-2'>5</span>
              </button>
            </div>
            <div className={`grid gap-4 ${viewAs === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}`}>
              {
                products?.map(product => (
                  <ProductCard size={viewAs !== 'grid' ? "large" : ''} grid={viewAs !== 'grid'} product={product} key={product?.id} />
                ))
              }
            </div>
          </Layout>
        )
      }
    </>
  )
}

export default SingleCategory