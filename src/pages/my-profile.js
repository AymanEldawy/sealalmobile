import { Layout } from "@/components/Layout/Layout";
import React, { useState } from "react";
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileBody from "@/components/ProfileComponents/ProfileBody";
const MyProfile = () => {
  // to change between user role you can use one of these words [client | provider]
  const [userRole, setUserRole] = useState("client");
  const changeRole = () => {
    if (userRole === "client") {
      setUserRole("provider");
    } else setUserRole("client");
  };
  return (
    <Layout>
      <ProfileHeader role={userRole}  changeRole={changeRole} />
      <ProfileBody role={userRole} />
    </Layout>
  );
};

export default MyProfile;
