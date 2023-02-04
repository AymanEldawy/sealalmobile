import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from './../../components/Layout/Layout';
import { Breadcrumb } from './../../components/Breadcrumb/Breadcrumb';
import { SingleProductDetails } from './../../components/SingleProduct/SingleProductDetails';
import { getItemById } from '@/data/cardData';

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setProduct(getItemById(id));
  }, []);
  return (
    <Layout>
      <div className="container">
        <Breadcrumb paths="categories/product-name" />
        <SingleProductDetails product={product}/>
        {/* <RelatedProducts /> */}
      </div>
    </Layout>
  );
};

export default ProductDetails;
