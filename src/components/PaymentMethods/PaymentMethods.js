import Image from "next/image";
import React from "react";

const PaymentMethods = ({
  containerClassName,
  labelClassName,
  onPaymentClick,
  showInputs,
  ...input
}) => {
  return (
    <div className={`flex gap-4 items-center ${containerClassName} `}>
      <label
        className={` flex flex-col gap-2 ${labelClassName}`}
        onClick={!!onPaymentClick ? onPaymentClick : undefined}
      >
        <span className="rounded-md bg-white p-2 shadow">
          <Image
            src="/images/Visa.png"
            alt=""
            width={32}
            height={28}
            className="w-8 h-8 object-contain"
          />
        </span>
        {!!showInputs ? (
          <input type="radio" name="payment_method" {...input} />
        ) : null}
      </label>
      <label
        className={` flex flex-col  gap-2 ${labelClassName}`}
        onClick={!!onPaymentClick ? onPaymentClick : undefined}
      >
        <span className="rounded-md bg-white p-2 shadow">
          <Image
            src="/images/mastercard.png"
            alt=""
            width={32}
            height={28}
            className="w-8 h-8 object-contain"
          />
        </span>
        {!!showInputs ? (
          <input type="radio" name="payment_method" {...input} />
        ) : null}
      </label>
      <label
        className={` flex flex-col  gap-2 ${labelClassName}`}
        onClick={!!onPaymentClick ? onPaymentClick : undefined}
      >
        <span className="rounded-md bg-white p-2 shadow relative">
          <Image
            src="/images/cash.png"
            alt=""
            width={32}
            height={28}
            className="w-8 h-8 object-contain"
          />
          <span className="text-[10px] uppercase absolute font-semibold bg-yellow-400 text-white px-[2px] bottom-1">Cash</span>
        </span>
        {!!showInputs ? (
          <input type="radio" name="payment_method" {...input} />
        ) : null}
      </label>
    </div>
  );
};

export default PaymentMethods;
