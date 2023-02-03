import React from 'react';
import { Brand } from './../Global/Brand';
import { Social } from './Social';

export const OrganizationInfo = () => {
  return (
    <div className='p-4 flex-col flex gap-4'>
      <Brand invert />
      <p>
        Your web is the yomna Ecommece who Your web is the Ecommece who You.
      </p>
      <Social />
    </div>
  );
};
