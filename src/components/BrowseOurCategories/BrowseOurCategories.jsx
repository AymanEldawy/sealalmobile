import React, { useState, useEffect } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { BrowseCategoriesSlide } from './BrowseCategoriesSlide';
import { Categories } from '@/data/cardData';
export const BrowseOurCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(Categories);
  }, []);
  console.log(Categories);
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle title="Browse Our Categories" />
        <div className="relative overflow-hidden">
          <BrowseCategoriesSlide categories={categories} />
        </div>
      </div>
    </div>
  );
};
