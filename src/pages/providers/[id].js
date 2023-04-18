import BackToHome from "@/components/Global/BackToHome/BackToHome";
import { Button } from "@/components/Global/Button/Button";
import { HeartIcon, LampIcon } from "@/components/Icons";
import MessageIcon from "@/components/Icons/MessageIcon";
import ShareIcon from "@/components/Icons/ShareIcon";
import { Layout } from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import ProviderInfo from "@/components/ProviderInfo/ProviderInfo";
import ProviderProfile from "@/components/ProviderProfile/ProviderProfile";
import RequestServicesForm from "@/components/RequestServicesForm/RequestServicesForm";
import { LanguageContext } from "@/context/LangContext";
import { getItemById, serviceProviders } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const SingleProvider = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const { id } = router?.query;
  const [open, setOpen] = useState(false);
  const [openRequest, setOpenRequest] = useState(false);
  const [provider, setProvider] = useState();

  useEffect(() => {
    setProvider(getItemById(serviceProviders, id));
  }, [id]);

  const onSubmitRequest = (values) => {
    setOpenRequest(false)
    setOpen(true)
  }
  return (
    <>
      <Layout
        full
        mainClassName="!bg-[#F2F2F2]"
        containerClassName="relative h-32 !items-start"
        hideBottomMenu
        extraIcons={
          <>
            <ShareIcon className="scale-[85%] cursor-pointer" />
            <HeartIcon className="text-white scale-[85%] cursor-pointer" />
          </>
        }
      >
        <div className="relative">
          <figure className="absolute -top-20 left-1/2 overflow-visible -translate-x-1/2  ">
            <Image
              className="rounded-[50%] object-cover  h-36 w-h-36 border-4 bg-white border-[#F2F2F2] "
              src={provider?.image}
              alt={provider?.name}
              height={150}
              width={150}
            />
          </figure>
        </div>

        <ProviderProfile provider={provider} />
        <div className="container pt-4">
          <ProviderInfo provider={provider} />
        </div>
        <div className="border-2 border-white my-4" />
        <div className="container">
          <h3 className="text-primary text-lg mb-4 capitalize">
            {fetchWord("payment_methods_available", lang)}
          </h3>
          <PaymentMethods containerClassName="w-full mb-4 justify-around" />
        </div>
        <div className="h-28" />
        {/* reviews */}
      </Layout>
      <Modal open={openRequest} close={() => setOpenRequest(false)} containerClassName="max-w-[575px]" modalClassName="overflow-auto max-h-[80vh]">
        <RequestServicesForm getValues={onSubmitRequest}  inModal />
      </Modal>
      <Modal open={open} close={() => setOpen(false)} containerClassName="max-w-[575px]">
        <div className="flex flex-col justify-center items-center gap-2 px-12">
          <span>
            <LampIcon />
          </span>
          <small className="text-primary font-medium">
            {fetchWord("thank_you", lang)}
          </small>
          <p className="font-medium">{fetchWord("soon", lang)}</p>
          <BackToHome />
        </div>
      </Modal>
      <div className="fixed bottom-0 left-0 bg-[#F2F2F2] w-full !max-w-[575px]">
        <div className=" flex gap-2 p-3 mb-2">
          <Button classes="flex-1 !p-3" onClick={() => setOpenRequest(true)} >{fetchWord("book_now", lang)}</Button>
          <Link href="/chat" className="w-20 flex items-center justify-center rounded-md border-primary border-2">
            <MessageIcon className="text-gray-500" />{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProvider;
