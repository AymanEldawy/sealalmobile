import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { Card } from './../Card/Card';
import { ChevronIcon } from './../Icons/ChevronIcon';
import { ChevronPagIcon } from './../Icons/ChevronPagIcon';

export const CategoriesGrid = ({ items, itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems?.map((product) => (
          <div className="overflow-hidden" key={product?.id}>
            <Card item={product} inCategory />
          </div>
        ))}
      </div>
      <ReactPaginate
        className="flex justify-end items-center gap-2 mt-6 category-paginate"
        breakLabel="..."
        nextLabel={<ChevronPagIcon />}
        activeClassName="!text-primary !border-primary"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <span className="rotate-180 flex">
            <ChevronPagIcon />
          </span>
        }
        disabledClassName="bg-bgprimary border-none pointer-none disabled"
        renderOnZeroPageCount={null}
        containerClassName="bg-black"
      />
    </div>
  );
};
