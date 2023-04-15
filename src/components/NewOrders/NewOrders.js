import { orders } from "@/data/dummyData";
import React, { useState } from "react";
import OrderCard from "../OrderCard/OrderCard";
import OrderCancelForm from "./OrderCancelForm/OrderCancelForm";
import OrderCompetedForm from "./OrderCompetedForm/OrderCompetedForm";
import { useCallback } from "react";

const NewOrders = ({ layout }) => {
  const [openCancelForm, setOpenCancelForm] = useState(false);
  const [openCompetedForm, setOpenCompetedForm] = useState(false);
  const [offerId, setOfferId] = useState(null);
  const onClickCancel = useCallback((id) => {
    setOpenCancelForm(true);
    setOfferId(id);
  }, []);
  const onClickDone = useCallback((id) => {
    setOfferId(id);
    setOpenCompetedForm(true);
  }, []);

  const onClosePopup = () => {
    setOpenCancelForm(false);
    setOpenCompetedForm(false);
    console.log("run...");
  };

  const onConfirmCancel = (reason) => {
    console.log(reason);
  };
  const onConfirmDone = () => {
    console.log("completed");
  };

  return (
    <>
      <OrderCancelForm
        onClosePopup={onClosePopup}
        onConfirmCancel={onConfirmCancel}
        openCancelForm={openCancelForm}
      />
      <OrderCompetedForm
        onClosePopup={onClosePopup}
        onConfirmDone={onConfirmDone}
        openCompetedForm={openCompetedForm}
      />
      <div className=" bg-[#F6F6F6] py-8">
        <div className="container">
          <div className="flex flex-col gap-4">
            {orders?.map((order) => (
              <OrderCard
                onClickCancel={onClickCancel}
                onClickDone={onClickDone}
                order={order}
                key={order?.orderNumber}
                layout={layout}
                setOfferId={setOfferId}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOrders;
