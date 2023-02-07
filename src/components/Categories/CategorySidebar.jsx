import React, { useContext } from 'react';

import { CategoryColorsFilter } from './CategoryColorsFilter';
import { CategoryFilterPrice } from './CategoryFilterPrice';
import { CategoryFilterSizes } from './CategoryFilterSizes';
import { CategoryList } from './CategoryList';
import { CategoryMostPopular } from './CategoryMostPopular';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CategorySidebar = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <aside className="bg-bgseconday min-w-[140px] w-[200px] lg:w-[339px]">
      <CategoryList title={fetchWord('categories', lang)} />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryFilterPrice title={fetchWord('price', lang)} />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryColorsFilter title={fetchWord('colors', lang)} />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryFilterSizes title={fetchWord('Sizes', lang)} />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryMostPopular title={fetchWord('Most_Popular', lang)} />
    </aside>
  );
};
