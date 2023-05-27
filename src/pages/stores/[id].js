import { Filters } from '@/components/CategoriesFilterComponents/Filters'
import { Layout } from '@/components/Layout/Layout'
import { ProductCard } from '@/components/Product/ProductCard'
import { ProfileCard } from '@/components/ProfileComponents/ProfileCard'
import { LanguageContext } from '@/context/LangContext'
import { products } from '@/data/dummyData'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

const SingleStore = () => {
  const { lang } = useContext(LanguageContext)
  const [openFilter, setOpenFilter] = useState(false)
  const router = useRouter();
  const id = router?.query?.id
  const [sortBy, setSortBy] = useState('new');
  const [activeView, setActiveView] = useState('grid');
  return (
    <Layout hideSearch hideIcons title={'store name'}>
      {openFilter ?
        (<div className='p-4'>
          <Filters setOpenFilter={setOpenFilter} />
        </div>)
        : (
          <div className="px-4">
            <figure className='-mx-4'>
              <Image src="/images/profile-banner.png" alt="Profile banner" height={324} width={1200} className="max-w-full object-cover" />
            </figure>
            <div className="mt-4">
              <ProfileCard
                setSortBy={setSortBy}
                sortBy={sortBy}
                activeView={activeView}
                setActiveView={setActiveView}
                setOpenFilter={setOpenFilter}
              />
            </div>
            <div className={`mt-6 grid gap-4 ${activeView === 'grid' ? 'grid-cols-2 ' : ''}`}>
              {
                products?.map(product => (
                  <ProductCard size={activeView !== 'grid' ? "large" : ''} grid={activeView !== 'grid'} product={product} key={product?.id} />
                ))
              }
            </div>
          </div>)
      }
    </Layout>
  )
}

export default SingleStore