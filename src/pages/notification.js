import { Layout } from "@/components/Layout/Layout";
import { LanguageContext } from "@/context/LangContext";
import { notifications } from "@/data/dummyData";
import { fetchWord } from "@/lang/fetchWord";
import Image from "next/image";
import React, { useContext } from "react";

const Notification = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout title={fetchWord("notification", lang)} full>
      <div className="flex flex-col gap-8 p-4">
        {notifications?.map((notif) => (
          <div className="" key={notif?.date}>
            <h2 className="text-gray-500 capitalize mb-4">{notif?.date}</h2>
            <div className="flex flex-col gap-4">
              {notif?.list?.map((item) => (
                <div
                  className={`p-3 rounded-md flex items-start gap-2 ${item?.status ? "bg-white" : "bg-[#FFC33A14] shadow-md"
                    }`}
                  key={item?.time}
                >
                  <Image
                    src={item?.image}
                    alt="notification"
                    height={60}
                    width={100}
                    className="max-w-full object-contain"
                  />
                  <div >
                    <h4 className="font-medium mb-1">{item?.title}</h4>
                    <p className="text-sm text-lead">{item?.description}</p>
                  </div>
                  <span className="ltr:ml-auto rtl:mr-auto text-xs text-gray-500">{item?.time}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Notification;
