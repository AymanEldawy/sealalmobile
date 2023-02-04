import React from 'react';
import { CategoryList } from './CategoryList';
import { CategoryFilterPrice } from './CategoryFilterPrice';
import { CategoryColorsFilter } from './CategoryColorsFilter';
import { CategoryFilterSizes } from './CategoryFilterSizes';
import { CategoryMostPopular } from './CategoryMostPopular';

export const CategorySidebar = () => {
  return (
    <aside className="bg-bgprimary min-w-[140px] w-[200px] lg:w-[339px]">
      <CategoryList />
      <div className='border border-[#C2C2C2]' />
      <CategoryFilterPrice />
      <div className='border border-[#C2C2C2]' />
      <CategoryColorsFilter />
      <div className='border border-[#C2C2C2]' />
      <CategoryFilterSizes />
      <div className='border border-[#C2C2C2]' />
      <CategoryMostPopular />
    </aside>
  );
};
