import { products } from '@/data/cardData';
import React, { useContext } from 'react';

import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { CategoryBanner } from '../components/Categories/CategoryBanner';
import { CategorySidebar } from '../components/Categories/CategorySidebar';
import { Layout } from '../components/Layout/Layout';
import { CategoriesGrid } from './../components/Categories/CategoriesGrid';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const Categories = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="container !mb-4">
        <CategoryBanner />
        <Breadcrumb paths="category/fashion" />
        <div className="flex gap-4">
          <CategorySidebar />
          <CategoriesGrid items={products} itemsPerPage={12} />
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
