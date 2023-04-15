import Image from "next/image";
import React from "react";

import { Layout } from "../Layout/Layout";

const AuthLayout = ({ children, pageTitle, description, link, ...props }) => {
  return (
    <Layout
      {...props}
      containerClassName="flex flex-col gap-4 !items-start justify-start !pb-8"
      mainClassName="-mt-5"
      hideIcons
      extraContent={
        <div className="">
          <h1 className="text-white text-2xl mb-1 capitalize">{pageTitle}</h1>
          {description ? <p className="flex flex-wrap text-gray-200 text-sm">{description} {link ? link : null}</p> : null}
        </div>
      }
    >
      <div className="flex flex-col flex-1 items-center mb-8">{children}</div>
    </Layout>
  );
};

export default AuthLayout;
