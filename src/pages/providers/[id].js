import { Button } from "@/components/Global/Button/Button";
import { LampIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout/Layout";
import Modal from "@/components/Modal/Modal";
import ProviderInfo from "@/components/ProviderInfo/ProviderInfo";
import ProviderProfile from "@/components/ProviderProfile/ProviderProfile";
import { LanguageContext } from "@/context/LangContext";
import { getItemById, serviceProviders } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const SingleProvider = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const { id } = router?.query;
  const [open, setOpen] = useState(false);
  const [provider, setProvider] = useState();

  console.log(router);
  useEffect(() => {
    setProvider(getItemById(serviceProviders, id));
  }, [id]);
  console.log(provider);
  return (
    <>
      <Layout>
        <ProviderProfile provider={provider} />
        <div className="pt-12">
          <div className="container">
            <ProviderInfo provider={provider} />
            <Button
              onClick={() => setOpen(true)}
              classes="bg-secondary min-w-[320px] !py-3 block mx-auto"
            >
              {" "}
              {fetchWord("accept_offer", lang)}{" "}
            </Button>
          </div>
        </div>
        {/* reviews */}
      </Layout>
      {open ? (
        <Modal open={open} close={() => setOpen(false)}>
          <div className="flex flex-col justify-center items-center gap-2 px-12">
            <span>
              <LampIcon />
            </span>
            <small className="text-primary font-medium">
              {fetchWord("thank_you", lang)}
            </small>
            <p className="font-medium">{fetchWord("soon", lang)}</p>
            <Link
              href="/"
              className="!bg-secondary rounded-md text-sm px-6 py-3 !text-black mt-6"
            >
              {fetchWord("back_home", lang)}
            </Link>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default SingleProvider;
