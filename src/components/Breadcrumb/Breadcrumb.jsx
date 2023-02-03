import React from 'react';
import Link from 'next/link';
import { HomeIcon } from './../Icons/HomeIcon';
import { ChevronIcon } from './../Icons/ChevronIcon';
export const Breadcrumb = ({ paths }) => {
  const spratsPath = paths.split('/');
  return (
    <div className="flex gap-3 items-center my-6">
      <Link href="/">
        <HomeIcon />
      </Link>
      {spratsPath?.map((path, index) => (
        <>
          <span className="rotate-180">
            <ChevronIcon />
          </span>
          {index === spratsPath?.length - 1 ? (
            path
          ) : (
            <Link className="capitalize" href={`/${path}`}>
              {path}
            </Link>
          )}
        </>
      ))}
    </div>
  );
};
