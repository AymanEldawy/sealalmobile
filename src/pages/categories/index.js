import { CategoryList } from '@/components/CategoriesComponents/CategoryList';
import { CategoryMost } from '@/components/CategoriesComponents/CategoryMost'
import { SubCategoryFilter } from '@/components/CategoriesComponents/SubCategoryFilter';
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext';
import { AllCategories, mostCategories } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

const Categories = () => {
  const { lang } = useContext(LanguageContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(AllCategories)
  }, [])
  return (
    <Layout hideIcons containerClassName="!gap-8">

      <SubCategoryFilter />
      <CategoryMost mostCategories={mostCategories} />
      <Link href="/categories" className='capitalize text-secondary font-semibold flex items-center gap-2'>
        {fetchWord('popular_products', lang)}
        <span className="text-primary border border-primary rounded-2xl p-1 text-xs">{fetchWord('hot_categories', lang)}</span>
      </Link>
      <CategoryList categories={categories}/>
    </Layout>
  )
}

export default Categories