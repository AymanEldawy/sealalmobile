import React from 'react';
import Link from 'next/link';

export const CustomerService = ({ title }) => {
  return (
    <div className="p-4">
      <h4 className="text-lg text-primary font-medium mb-4">{title}</h4>
      <ul className="flex flex-col gap-5">
        <li className="flex gap-1">
          <Link href="">Help & FAQs</Link>
        </li>
        <li className="flex gap-1">
          <Link href="">Order Tracking</Link>
        </li>
        <li className="flex gap-1">
          <Link href="">Sitemap</Link>
        </li>
      </ul>
    </div>
  );
};
