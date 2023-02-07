import React from 'react';
import { UpperMenu } from './UpperMenu/UpperMenu';
import Styles from '@/styles/Menu/Menu.module.css';
import { PrimaryMenu } from './PrimaryMenu/PrimaryMenu';

export const Menu = (props) => {
  console.log(props);
  return (
    <nav className={Styles.menu}>
      <UpperMenu dir={props?.direction} />
      <PrimaryMenu />
    </nav>
  );
};
