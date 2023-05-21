import React, { useState, useEffect, useContext } from 'react'
import { ProfileTitle } from '../ProfileTitle'
import { SortBy } from '../../CategoriesFilterComponents/SortBy'
import { ProductsTable } from './ProductsTable'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import { products as allProducts } from '@/data/dummyData'
import { AddNewProduct } from './AddNewProduct'
import { ViewAs } from '@/components/CategoriesFilterComponents/ViewAs'
import { SellerProductCard } from './SellerProductCard'
import { CloseIcon, PlusIcon } from '@/components/Icons'
import { Button } from '@/components/Global/Button/Button'

export const SellerProducts = () => {
  const { lang } = useContext(LanguageContext);
  const [products, setProducts] = useState([])
  const [operation, setOperation] = useState(false);
  const [activeView, setActiveView] = useState('grid');
  const [sortBy, setSortBy] = useState('')
  useEffect(() => {
    setProducts(allProducts)
  }, [])
  return (
    <div className="ltr:pl-4 rtl:pr-4">
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord('products', lang)} />
        <div className="flex gap-2 items-center">
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          <ViewAs activeView={activeView} setActiveView={setActiveView} />
          {
            operation === 'create' ?
              <Button onClick={() => setOperation('')} classes="!p-1" outline><CloseIcon /></Button>
              :
              <Button onClick={() => setOperation('create')} classes="!p-1" outline><PlusIcon /></Button>

          }
        </div>
      </div>
      {
        operation === 'create' ?
          <AddNewProduct setOperation={setOperation} />
          :
          activeView === 'grid' ?
            <div className='flex flex-col gap-4'>
              {
                products?.map(product => (
                  <SellerProductCard key={product?.id} product={product} />
                ))
              }
            </div>
            :
            <ProductsTable products={products} setOperation={setOperation} />
      }
    </div>
  )
}
