import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SectionTitle } from './../components/Global/SectionTitle';
import { TableProducts } from './../components/TableProducts/TableProducts';
import { fetchWord } from '@/lang/fetchWord';

const Wishlist = () => {
  return (
    <Layout>
      <div className="mt-12">
        <div className="container">
          <Breadcrumb paths="wishlist" />
          <SectionTitle title={fetchWord('My Wishlist', lang)} />
          <TableProducts />
        </div>
      </div>
    </Layout>
  );
};
export default Wishlist;
