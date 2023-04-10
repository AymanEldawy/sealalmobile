import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../Icons";
import MessageIcon from "../Icons/MessageIcon";

const SocialCard = ({
  containerClassName,
  linkClassName,
  iconClassName,
  withMessage,
}) => {
  return (
    <div className={`flex items-center gap-1 ${containerClassName}`}>
      <a href="" className={`scale-[60%] ${linkClassName}`}>
        <FacebookIcon className={`text-black ${iconClassName}`} />
      </a>
      <a href="" className={`scale-[60%] ${linkClassName}`}>
        <InstagramIcon className={`text-black ${iconClassName}`} />
      </a>
      <a href="" className={`scale-[60%] ${linkClassName}`}>
        <TwitterIcon className={`text-black ${iconClassName}`} />
      </a>
      {withMessage ? (
        <a href="" className={`scale-[60%] ${linkClassName}`}>
          <MessageIcon className={`text-black ${iconClassName}`} />
        </a>
      ) : null}
    </div>
  );
};

export default SocialCard;
