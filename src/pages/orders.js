import React, { useState, useContext } from 'react';

import { OrdersEmpty } from './../components/Orders/OrdersEmpty';
import { OrderStatusBar } from './../components/Orders/OrderStatusBar';
import { TableOrderProducts } from './../components/Orders/TableOrderProducts';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const Orders = () => {
  const { lang } = useContext(LanguageContext);
  const [orders, setOrders] = useState();
  return (
    <ProfileLayout
      breadcrumbPath="My Orders"
      title={fetchWord('my_orders', lang)}
    >
      {!orders ? (
        <div>
          <OrderStatusBar />
          <TableOrderProducts />
        </div>
      ) : (
        <OrdersEmpty />
      )}
    </ProfileLayout>
  );
};

export default Orders;
