import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ChevronIcon } from './../Icons/ChevronIcon';

export const ProfileSidebar = () => {
  const router = useRouter();
  console.log(router);
  const links = [
    { name: 'Profile', path: '/profile' },
    { name: 'My Orders', path: '/orders' },
    { name: 'Addresses', path: '/addresses' },
    { name: 'Saved cards', path: '/saved-cards' },
  ];
  return (
    <aside className="sm:w-[250px] md:w-[361px] bg-bgprimary py-8">
      <div className="px-4 md:px-8">
        <h4 className="font-medium text-lg">User name</h4>
        <p className="text-secondary text-sm font-medium">Email@email,com</p>
      </div>
      <ul className="mt-4">
        {links?.map((link) => (
          <li
            key={link?.name}
            className={`${
              router.pathname == link?.path
                ? '-mt-[1px] bg-primary text-white'
                : ''
            } px-4 md:px-8 font-medium`}
          >
            <Link
              href={link?.path}
              className="border-b border-primary block py-3"
            >
              {link?.name}
            </Link>
          </li>
        ))}
        <li className='px-4 md:px-8 font-medium'>
          <button className='border-b border-primary py-3 w-full flex gap-4 items-center'>
            Languages
            <span className='scale-75 -rotate-90 mt-2'>
              <ChevronIcon />
            </span>
          </button>
        </li>
      </ul>
      <button className="text-secondary text-md px-4 md:px-8 mt-4 font-medium">
        Sign out
      </button>
    </aside>
  );
};
