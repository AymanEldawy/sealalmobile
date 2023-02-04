import Link from 'next/link';
import React from 'react';

export const CustomerService = ({ title }) => {
  return (
    <div className="p-4 w-52">
      <h4 className="text-lg text-primary font-medium mb-4 whitespace-nowrap">
        {title}
      </h4>
      <ul className="flex flex-col gap-5">
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            Help & FAQs
          </Link>
        </li>
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            Order Tracking
          </Link>
        </li>
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            Sitemap
          </Link>
        </li>
      </ul>
    </div>
  );
};
