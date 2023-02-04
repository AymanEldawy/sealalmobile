import React, { useState } from 'react';
import { SingleProductImg } from './SingleProductImg';
import { SingleProductInfo } from './SingleProductInfo';
import { TabsList } from './../Tabs/TabsList';
import { TabsContent } from '../Tabs/TabsContent';
import { ProductDescription } from './ProductDescription';
import { RelatedProducts } from './RelatedProducts';
import { ProductSizes } from './ProductSizes';
import { Reviews } from './../Reviews/Reviews';

export const SingleProductDetails = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState('description');
  const handelChangeTab = (item) => setSelectedTab(item);
  console.log(selectedTab);
  return (
    <div className="">
      <div className="flex">
        <SingleProductImg img={product?.img} alt={product?.title} />
        <SingleProductInfo product={product} />
      </div>
      <TabsList
        items={['description', 'Size Guide', 'reviews']}
        handelChangeTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TabsContent selectedTab={selectedTab}>
        <div tabName="description" className={0}>
          <ProductDescription />
        </div>
        <div tabName="Size Guide" className={1}>
          <ProductSizes />
        </div>
        <div tabName="reviews" className={2}>
          <Reviews />
        </div>
      </TabsContent>
      <RelatedProducts />
    </div>
  );
};
