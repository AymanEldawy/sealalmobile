import Styles from '@/styles/Menu/Menu.module.css';
import React from 'react';

import { PrimaryMenu } from './PrimaryMenu/PrimaryMenu';
import { UpperMenu } from './UpperMenu/UpperMenu';

export const Menu = ({setOpenedSearch }) => {
  return (
    <nav className={Styles.menu}>
      <UpperMenu  />
      <PrimaryMenu setOpenedSearch={setOpenedSearch} />
    </nav>
  );
};
