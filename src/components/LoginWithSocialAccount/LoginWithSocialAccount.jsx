import React from 'react';
import { FacebookIcon } from './../Icons/FacebookIcon';
import { GoogleIcon } from './../Icons/GoogleIcon';
import { AppleIcon } from './../Icons/AppleIcon';

export const LoginWithSocialAccount = () => {
  return (
    <div className="flex gap-4 w-72 justify-around mx-auto">
      <button className="scale-75">
        <FacebookIcon primary />
      </button>
      <button className="scale-75">
        <GoogleIcon primary />
      </button>
      <button className="scale-75">
        <AppleIcon />
      </button>
    </div>
  );
};
