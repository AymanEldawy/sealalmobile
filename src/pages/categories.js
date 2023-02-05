import { products } from '@/data/cardData';
import React from 'react';

import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { CategoryBanner } from '../components/Categories/CategoryBanner';
import { CategorySidebar } from '../components/Categories/CategorySidebar';
import { Layout } from '../components/Layout/Layout';
import { CategoriesGrid } from './../components/Categories/CategoriesGrid';

const Categories = () => {
  return (
    <Layout>
      <div className="container !mb-4">
        <CategoryBanner />
        <Breadcrumb paths="category/Fashion" />
        <div className="flex gap-4">
          <CategorySidebar />
          <CategoriesGrid items={products} itemsPerPage={12} />
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
