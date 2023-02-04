import React, { useState } from 'react';

import { OrdersEmpty } from './../components/Orders/OrdersEmpty';
import { OrderStatusBar } from './../components/Orders/OrderStatusBar';
import { TableOrderProducts } from './../components/Orders/TableOrderProducts';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';

const Orders = () => {
  const [orders, setOrders] = useState();
  return (
    <ProfileLayout breadcrumbPath="My Orders" title="My Orders">
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
