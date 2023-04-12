import Banner from "@/components/Banner/Banner";
import HeadBannerInfo from "@/components/HeadBannerInfo/HeadBannerInfo";
import { Layout } from "@/components/Layout/Layout";
import ProfileBanner from "@/components/ProfileBanner/ProfileBanner";
import { LanguageContext } from "@/context/LangContext";
import { fetchWord } from "@/lang/fetchWord";
import React, { useContext } from "react";
import Image from "next/image";
import { EditIcon } from "@/components/Icons";
import Link from "next/link";
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileBody from "@/components/ProfileComponents/ProfileBody";
const MyProfile = () => {
  const { lang } = useContext(LanguageContext);
  const userRole = "provider"; // to change between user role you can use one of these words [client | provider]
  return (
    <Layout>
      <ProfileHeader />
      <ProfileBody role={userRole} />
    </Layout>
  );
};

export default MyProfile;
