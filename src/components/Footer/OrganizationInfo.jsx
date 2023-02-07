import React from 'react';

import { Brand } from './../Global/Brand';
import { Social } from './Social';

export const OrganizationInfo = ({ description }) => {
  return (
    <div className="p-4 flex-col flex gap-4 max-w-[230px]">
      <Brand invert />
      <p>{description}</p>
      <Social />
    </div>
  );
};
