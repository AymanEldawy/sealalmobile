import { PrivacyImgIcon } from "@/components/Icons";
import React from "react";

const Privacy = () => {
  return (
    <div className=" flex-col flex gap-4">
      <span className="w-fit mx-auto block ">
        <PrivacyImgIcon />
      </span>
      <p className="text-sm text-center text-lead">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries,.
      </p>
    </div>
  );
};

export default Privacy;
