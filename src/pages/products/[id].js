import { ShareIcon } from '@/components/Icons';
import { Layout } from '@/components/Layout/Layout'
import { ProductFavorite } from '@/components/Product/ProductFavorite';
import { ProductAdditionalInformation } from '@/components/SingleProductComponents/ProductAdditionalInformation';
import { ProductCompare } from '@/components/SingleProductComponents/ProductCompare';
import { ProductDescription } from '@/components/SingleProductComponents/ProductDescription';
import { ProductFeatures } from '@/components/SingleProductComponents/ProductFeatures';
import { ProductImages } from '@/components/SingleProductComponents/ProductImages';
import { ProductInformation } from '@/components/SingleProductComponents/ProductInformation';
import { ProductReviews } from '@/components/SingleProductComponents/ProductReviews';
import { ProductSizeChart } from '@/components/SingleProductComponents/ProductSizeChart';
import ShareProduct from '@/components/SingleProductComponents/ShareProduct';
import { SimilarProducts } from '@/components/SingleProductComponents/SimilarProducts';
import TabsContent from '@/components/Tabs/TabsContent';
import TabsList from '@/components/Tabs/TabsList';
import { GlobalOptions } from '@/context/GlobalOptions';
import { getItemById, productImages, products } from '@/data/dummyData';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const tabs = ['product_description', 'reviews', 'size_chart', 'compare', 'product_tech_description']

const SingleProduct = () => {
  const router = useRouter();
  const { addToCart } = useContext(GlobalOptions);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs?.[0])
  const [product, setProduct] = useState();
  const [openShare, setOpenShare] = useState(false)
  useEffect(() => {
    console.log(products, router?.query?.id)
    console.log(getItemById(products, +router?.query?.id))
    setProduct(getItemById(products, +router?.query?.id))
  }, [router?.query?.id])

  console.log(router)
  console.log(activeTab)
  // add to cart
  const handleToCart = () => {
    addToCart({ ...product, quantity: quantity })
  }

  return (
    <>
      {
        openShare ? <ShareProduct setShare={setOpenShare} /> : null
      }
      <Layout>
        <div className='relative'>
          <ProductImages images={productImages} />
          <div className='flex flex-col gap-3 absolute ltr:right-4 rtl:left-3 top-3 z-10'>
            <ProductFavorite favorite={product?.favorite} className="!static" />
            <button onClick={() => setOpenShare(true)}><ShareIcon className="w-6 h-6 text-primary" /> </button>
          </div>
        </div>
        <ProductInformation sale="sale" status="new" handleToCart={handleToCart} maxQuantity={5} quantity={quantity} setQuantity={setQuantity} color={color} setColor={setColor} size={size} setSize={setSize} product={product} />
        <TabsList
          list={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          containerClassName="border-gray-400 border-b-2 mt-4 p-0 gap-4 mb-4"
          itemClassName="capitalize !px-0 text-xs whitespace-nowrap text-lead font-semibold"
          activeClassName="border-primary !text-primary border-b-[3px] -mb-[2px]"
        />

        <TabsContent activeTabName={activeTab}>
          <ProductDescription tabName="product_description" />
          <ProductReviews tabName="reviews" />
          <ProductAdditionalInformation tabName="additional_information" />
          <ProductSizeChart tabName="size_chart" />
          <ProductCompare tabName="compare" />
          <ProductFeatures tabName="product_tech_description" />
        </TabsContent>
        <SimilarProducts />
      </Layout>
    </>
  )
}

export default SingleProduct