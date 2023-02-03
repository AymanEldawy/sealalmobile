import React from 'react';

import { Footer } from './../Footer/Footer';
import { Menu } from './../Menu/Menu';
import { UpperMenu } from './../Menu/UpperMenu/UpperMenu';

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};
