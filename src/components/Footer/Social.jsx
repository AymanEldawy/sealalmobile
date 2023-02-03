import React from 'react';
import Link from 'next/link';
import { FacebookIcon } from './../Icons/FacebookIcon';
import { InstagramIcon } from './../Icons/InstagramIcon';
import { GoogleIcon } from './../Icons/GoogleIcon';
import { TwitterIcon } from './../Icons/TwitterIcon';
export const Social = () => {
  return (
    <div className="flex gap-4 justify-between items-center">
      <Link href="">
        <FacebookIcon />
      </Link>
      <Link href="">
        <InstagramIcon />
      </Link>
      <Link href="">
        <GoogleIcon />
      </Link>
      <Link href="">
        <TwitterIcon />
      </Link>
    </div>
  );
};
