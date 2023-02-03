import React from 'react';
import Link from 'next/link';
import { SearchIcon } from './../../Icons/SearchIcon';
import { HeartIcon } from './../../Icons/HeartIcon';
import { WorldIcon } from './../../Icons/WorldIcon';
import { CartIcon } from './../../Icons/CartIcon';
export const MainIconsList = () => {
  return (
    <ul className="flex items-center gap-2 mr-8">
      <li className=" scale-75 ">
        <button>
          <SearchIcon />
        </button>
      </li>
      <li className=" scale-75 ">
        <Link href="/wishlist">
          <HeartIcon />
        </Link>
      </li>
      <li className=" scale-75 ">
        <Link href="">
          <WorldIcon />
        </Link>
      </li>
      <li className=" scale-75 ">
        <Link href="/cart">
          <CartIcon />
        </Link>
      </li>
    </ul>
  );
};
