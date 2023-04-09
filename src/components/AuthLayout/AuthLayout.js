import Image from "next/image";
import React from "react";

import { Layout } from "../Layout/Layout";

const AuthLayout = ({ children }) => {
  return (
    <Layout hideFooter hideApp>
      <div className="flex gap-4">
        <Image
          className="!max-w-full !h-auto !w-auto bg-cover flex-1"
          src="/images/home-services-mdpi.png"
          alt="register"
          height={400}
          width={500}
        />
        <div className="flex flex-col flex-1 items-center mb-8">{children}</div>
      </div>
    </Layout>
  );
};

export default AuthLayout;
