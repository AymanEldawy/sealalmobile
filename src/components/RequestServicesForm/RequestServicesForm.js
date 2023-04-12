import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";
import { InputField } from "../Forms/InputField";
import CustomSelectField from "../Forms/CustomSelectField";
import { serviceProviders, services } from "@/data/dummyData";
import { useState } from "react";
import { TextField } from "../Forms/TextField";
import { TimeCheckIcon } from "../Icons";
import { PlusIcon, WorldIcon } from "../Icons";
import { FileUpload } from "../Forms/FileUpload";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import { Button } from "../Global/Button/Button";

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
const RequestServicesForm = ({ getValues, setSelectedTab }) => {
  const { lang } = useContext(LanguageContext);
  const [serviceName, setServiceName] = useState("");
  const [location, setLocation] = useState("");
  const [selectDate, setSelectDate] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [description, setDescription] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

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
      description,
      expirationDate,
    });
    setSelectedTab("confirmation");
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-2xl font-semibold mb-6">
        {fetchWord("add_information", lang)}{" "}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 text-sm gap-3">
        <InputField
          label={fetchWord("service_name", lang)}
          name="serviceName"
          placeholder={fetchWord("service_name_placeholder", lang)}
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          classes="!py-3 placeholder:text-xs"
        />
        <CustomSelectField
          label={fetchWord("select_category", lang)}
          name="selectCategory"
          value={selectCategory}
          list={services}
          onChange={(e) => setSelectCategory(e.target.value)}
        />
        <InputField
          label={fetchWord("location", lang)}
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          classes="!py-3"
          iconEnd={<WorldIcon />}
        />
        <InputField
          label={fetchWord("select_date", lang)}
          name="selectDate"
          value={selectDate}
          onChange={(e) => setSelectDate(e.target.value)}
          placeholder={fetchWord("select_date_placeholder", lang)}
          iconStart={<TimeCheckIcon />}
        />
        <CustomSelectField
          label={fetchWord("select_time", lang)}
          name="selectTime"
          value={selectTime}
          list={timeList}
          onChange={(e) => setSelectTime(e.target.value)}
          placeholder={fetchWord("select_time_placeholder", lang)}
          iconStart={<TimeCheckIcon />}
          selectClassName="text-sm"
        />
      </div>
      <h2 className="text-2xl font-semibold my-6">
        {fetchWord("add_information", lang)}{" "}
      </h2>
      <TextField
        value={description}
        label={fetchWord("description", lang)}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={fetchWord("description_placeholder", lang)}
      />
      <button type="button" className=" flex gap-2 items-center">
        <span className="text-white bg-primary rounded-md p-2">
          <PlusIcon />
        </span>
        {fetchWord("add_picture", lang)}
      </button>
      <div className="flex justify-center items-center flex-col mt-8">
        <FileUpload classes="min-h-[auto]  min-w-[340px] p-4 px-8 border border-primary" />
        <button type="button" className="text-primary">
          {fetchWord("camera_capture", lang)}{" "}
        </button>
      </div>
      <h2 className="text-2xl font-semibold my-6">
        {fetchWord("payment_method", lang)}{" "}
      </h2>
      <PaymentMethods showInputs />
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-4">
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
        <div className="flex gap-2">
          <InputField
            label={fetchWord("expiration_date", lang)}
            name="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            classes="!py-3"
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
      </div>
      <Button classes="w-[270px] py-3 text-sm mt-8">
        {fetchWord("book_now", lang)}{" "}
      </Button>
    </form>
  );
};

export default RequestServicesForm;
