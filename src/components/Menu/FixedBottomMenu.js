import { UserRoleContext } from "@/context/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";

import { Button } from "../Global/Button/Button";
import { CheckListIcon, HomeIcon, MyOfferIcon, PlusIcon, UserCircleIcon, UserIcon } from "../Icons";
import MessageIcon from "../Icons/MessageIcon";

const menuLinks = [
  { path: "/", icon: <HomeIcon />, role: ['all'] },
  { path: "/offers", icon: <MyOfferIcon />, role: ['company', 'provider'] },
  { path: "/request-services", icon: <Button classes="!bg-primary font-semibold !text-white !p-[7px]"> <PlusIcon className="!text-white" /> </Button>, role: ['customer'] },
  { path: "/chat", icon: <MessageIcon />, role: ['all'] },
  { path: "/my-profile", icon: <UserCircleIcon className="text-gray-500 w-6 h-6" />, role: ['all'] },
];
const FixedBottomMenu = () => {
  const { userRole } = useContext(UserRoleContext)
  const router = useRouter()
  console.log(router)
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 rounded-t-3xl bg-white p-4 flex items-center justify-around max-w-[575px] shadow-lg border-t-2 border-gray-100">
      {menuLinks?.map((item) => (
        <>
          {
            item?.role?.includes(userRole) || item?.role?.includes('all') ? (

              <Link href={item?.path} key={item?.path} className={`${router?.pathname == item?.path ? 'menu-bottom-active-link' : ''}`}>
                <span>{item?.icon}</span>
              </Link>
            ) : null
          }
        </>
      ))}
    </div>
  );
};

export default FixedBottomMenu;
