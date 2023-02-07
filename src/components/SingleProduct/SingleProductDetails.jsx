import React, { useState } from 'react';

import { TabsContent } from '../Tabs/TabsContent';
import { Reviews } from './../Reviews/Reviews';
import { TabsList } from './../Tabs/TabsList';
import { ProductDescription } from './ProductDescription';
import { ProductSizes } from './ProductSizes';
import { RelatedProducts } from './RelatedProducts';
import { SingleProductImg } from './SingleProductImg';
import { SingleProductInfo } from './SingleProductInfo';

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
