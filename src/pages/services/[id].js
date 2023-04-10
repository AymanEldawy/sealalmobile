import { Layout } from "@/components/Layout/Layout";
import ProviderInfo from "@/components/ProviderInfo/ProviderInfo";
import ProviderProfile from "@/components/ProviderProfile/ProviderProfile";
import { getItemById, serviceProviders } from "@/data/dummyData";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SingleProvider = () => {
  const router = useRouter();
  const { id } = router?.query;
  const [provider, setProvider] = useState();
  console.log(router);
  useEffect(() => {
    setProvider(getItemById(serviceProviders, id));
  }, [id]);
  console.log(provider);
  return (
    <Layout>
      <ProviderProfile provider={provider} />
      <div className="pt-12">
        <div className="container">
          <ProviderInfo provider={provider} />
        </div>
      </div>
      {/* reviews */}
    </Layout>
  );
};

export default SingleProvider;
