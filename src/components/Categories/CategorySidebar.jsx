import React from 'react';

import { CategoryColorsFilter } from './CategoryColorsFilter';
import { CategoryFilterPrice } from './CategoryFilterPrice';
import { CategoryFilterSizes } from './CategoryFilterSizes';
import { CategoryList } from './CategoryList';
import { CategoryMostPopular } from './CategoryMostPopular';

export const CategorySidebar = () => {
  return (
    <aside className="bg-bgseconday min-w-[140px] w-[200px] lg:w-[339px]">
      <CategoryList />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryFilterPrice />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryColorsFilter />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryFilterSizes />
      <div className="border my-2 border-[#C2C2C2]" />
      <CategoryMostPopular />
    </aside>
  );
};
