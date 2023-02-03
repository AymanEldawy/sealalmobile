import React from 'react';
import { UpperMenu } from './UpperMenu/UpperMenu';
import Styles from '@/styles/Menu/Menu.module.css';
import { PrimaryMenu } from './PrimaryMenu/PrimaryMenu';

export const Menu = () => {
  return (
    <nav className={Styles.menu}>
      <UpperMenu />
      <PrimaryMenu />
      {/* UPPER MENU */}
      {/* PRIMARY MENU */}
    </nav>
  );
};
