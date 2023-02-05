import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { Layout } from '../components/Layout/Layout';
import { BillingDetails } from '../components/CheckoutComponents/BillingDetails';
import { Payment } from './../components/CheckoutComponents/Payment';
import { TrackOrder } from './../components/CheckoutComponents/TrackOrder';

const Checkout = () => {
  const [stage, setStage] = useState(1);
  const nextStageHandler = () => {
    setStage(stage + 1);
  };
  const displayStages = () => {
    switch (stage) {
      case 1:
        return <BillingDetails nextStageHandler={nextStageHandler} />;
      case 2:
        return <Payment nextStageHandler={nextStageHandler}/>;
      case 3:
        return <TrackOrder nextStageHandler={nextStageHandler}/>;
      default:
        return <BillingDetails />;
    }
  };
  return (
    <Layout>
      <div className="container">
        <Breadcrumb paths="Checkout" />
        {displayStages()}
      </div>
    </Layout>
  );
};

export default Checkout;
