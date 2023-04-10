import Image from "next/image";
import React from "react";

const PaymentMethods = () => {
  return (
    <div className="flex gap-4 items-center">
      <button className="bg-white p-2 rounded-md shadow">
        <Image src="/images/Visa.png" alt="" width={32} height={28} className="w-8 h-8 object-contain" />
      </button>
      <button className="bg-white p-2 rounded-md shadow">
        <Image src="/images/mastercard.png" alt="" width={32} height={28} className="w-8 h-8 object-contain" />
      </button>
      <button className="bg-white p-2 rounded-md shadow">
        <Image src="/images/cash.png" alt="" width={32} height={28} className="w-8 h-8 object-contain" />
      </button>
    </div>
  );
};

export default PaymentMethods;
