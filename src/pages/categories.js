import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { Layout } from '../components/Layout/Layout';
import { CategoryBanner } from '../components/Categories/CategoryBanner';
import { CategorySidebar } from '../components/Categories/CategorySidebar';
import { products } from '@/data/cardData';
import { Card } from '../components/Card/Card';
const Categories = () => {
  return (
    <Layout>
      <div className="container !mb-4">
        <CategoryBanner />
        <Breadcrumb paths="category/Fashion" />
        <div className="flex gap-4">
          <CategorySidebar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-auto max-h-[1200px]">
            {products?.map((product) => (
              <Card item={product} key={product?.id} inCategory />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
