import ContactForm from "@/components/ContactForm/ContactForm";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React from "react";
import { useContext } from "react";

const Contact = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <h1 className="bg-primary text-white h-48 flex items-center justify-center text-3xl">
        {fetchWord("contact", lang)}
      </h1>
      <div className="container">
        <div className="mt-12 flex justify-between gap-8">
          <div className="flex-1 p-8 bg-[#F9F9F9] rounded-lg">
            <ContactForm />
          </div>
          <div className="w-[40%] p-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
