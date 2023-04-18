import { LanguageContext } from "@/context/LangContext";
import { serviceProviders, services } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

import CustomSelectField from "../Forms/CustomSelectField";
import { FileUpload } from "../Forms/FileUpload";
import { InputField } from "../Forms/InputField";
import { TextField } from "../Forms/TextField";
import { Button } from "../Global/Button/Button";
import { TimeCheckIcon } from "../Icons";
import { PlusIcon, WorldIcon } from "../Icons";
import Modal from "../Modal/Modal";
import PaymentMethods from "../PaymentMethods/PaymentMethods";

const timeList = [
  { id: 0, name: "1-2 AM" },
  { id: 1, name: "2-3 AM" },
  { id: 2, name: "3-4 AM" },
  { id: 3, name: "4-5 AM" },
  { id: 4, name: "5-6 AM" },
  { id: 5, name: "6-7 AM" },
  { id: 6, name: "7-8 AM" },
  { id: 7, name: "8-9 AM" },
  { id: 8, name: "9-10 AM" },
  { id: 9, name: "10-11 AM" },
  { id: 10, name: "11-12 AM" },
  { id: 11, name: "12-1 PM" },
  { id: 12, name: "1-2 PM" },
  { id: 13, name: "2-3 PM" },
  { id: 14, name: "3-4 PM" },
  { id: 15, name: "4-5 PM" },
  { id: 16, name: "5-6 PM" },
  { id: 17, name: "6-7 PM" },
  { id: 18, name: "7-8 PM" },
  { id: 19, name: "8-9 PM" },
  { id: 20, name: "9-10 PM" },
  { id: 21, name: "10-11 PM" },
  { id: 22, name: "11-12 PM" },
  { id: 23, name: "12-1 AM" },
];
const RequestServicesForm = ({ getValues, setSelectedTab, inModal }) => {
  const { lang } = useContext(LanguageContext);
  const [serviceName, setServiceName] = useState("");
  const [location, setLocation] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [openPaymentForm, setOpenPaymentForm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    getValues({
      serviceName,
      location,
      selectCategory,
      selectTime,
      selectDate,
      creditCard,
      cvv,
      name,
      expirationDate,
    });
    if(!!setSelectedTab)
      setSelectedTab(1);
  };

  return (
    <>
      <Modal
        open={openPaymentForm}
        close={() => setOpenPaymentForm(false)}
        containerClassName="!items-end z-20 max-w-[575px] !justify-center"
        contentBoxClassName="relative !overflow-visible max-w-[90%] !rounded-none pt-12"
      >
        <h2 className="bg-primary text-white text-center text-xl capitalize shadow-md p-6 rounded-3xl -top-9 left-0 absolute w-full">
          {fetchWord("credit_card", lang)}
        </h2>
        <InputField
          label={fetchWord("name", lang)}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          classes="!py-3"
          placeholder="Khaled mohammed"
        />
        <InputField
          label={fetchWord("credit_card_number", lang)}
          name="creditCard"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          classes="!py-3"
          placeholder="92839239237923"
        />
        <div className="flex gap-2 w-full">
          <InputField
            label={fetchWord("expiration_date", lang)}
            name="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            classes="!py-3 w-full"
            placeholder="Y/M"
          />
          <InputField
            label={fetchWord("cvv", lang)}
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            classes="!py-3"
            placeholder="***"
          />
        </div>
        <Button classes="w-full font-medium mt-8">
          {fetchWord("confirmation_payment", lang)}
        </Button>
      </Modal>
      <form onSubmit={onSubmit}>
        <InputField
          label={fetchWord("service_name", lang)}
          name="serviceName"
          placeholder={fetchWord("service_name_placeholder", lang)}
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          classes="!py-3 placeholder:text-xs"
          labelClassName="!text-black"
        />
        <CustomSelectField
          label={fetchWord("select_category", lang)}
          name="selectCategory"
          value={selectCategory}
          list={services}
          onChange={(e) => setSelectCategory(e.target.value)}
          labelClassName="!text-black"
        />
        <InputField
          label={fetchWord("location", lang)}
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          classes="!py-3 !bg-white"
          iconEnd={<WorldIcon />}
          labelClassName="!text-black"
        />
        <InputField
          type="datetime-local"
          label={fetchWord("select_date", lang)}
          name="selectDate"
          value={selectDate}
          onChange={(e) => setSelectDate(e.target.value)}
          placeholder={fetchWord("select_date_placeholder", lang)}
          iconStart={<TimeCheckIcon />}
          labelClassName="!text-black"
        />
        {/* <CustomSelectField
          label={fetchWord("select_time", lang)}
          name="selectTime"
          value={selectTime}
          list={timeList}
          onChange={(e) => setSelectTime(e.target.value)}
          placeholder={fetchWord("select_time_placeholder", lang)}
          iconStart={<TimeCheckIcon />}
          selectClassName="text-sm"
          labelClassName="!text-black"
          iconClassName="!text-gray-500"
        /> */}

        <h3 className="text-base mt-4 mb-2">
          {fetchWord("payment_method", lang)}{" "}
        </h3>
        <PaymentMethods
          onPaymentClick={() => setOpenPaymentForm(true)}
          showInputs
          containerClassName="justify-around mb-4"
        />
        {
          inModal ? null : (
            <div className="h-32 -mx-4 bg-[#f2f2f2]" />

          )
        }
        <div className={` bottom-0 left-0 w-full max-w-[575px] p-4 ${inModal ? '' : 'fixed bg-[#f2f2f2]'}`}>
          <Button
            classes="w-[270px] py-3 text-sm !w-full block "
            onClick={() => {
              if (setSelectedTab) {
                setSelectedTab(3)
              }
            }}
          >
            {fetchWord(inModal ? 'confirm' : "next", lang)}{" "}
          </Button>
        </div>
      </form>
    </>
  );
};

export default RequestServicesForm;
