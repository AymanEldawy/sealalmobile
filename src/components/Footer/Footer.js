import React from "react";
import {
  BoltIcon,
  CallIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../Icons";
import MapIcon from "../Icons/MapIcon";
import FormSubscription from "./FormSubscription/FormSubscription";

const Footer = () => {
  return (
    <footer className="relative bg-primary overflow-hidden">
      <span className="absolute left-0 top-8">
        <BoltIcon />
      </span>
      <div className="container h-full">
        <div className="flex gap-8 items-center min-h-[280px] relative z-10">
          <div className="flex items-end justify-between w-full text-white">
            <div className=" flex items-end justify-between ">
              <div className="flex flex-col gap-8">
                <div className="flex gap-5 items-center">
                  <a href="">
                    <FacebookIcon className="text-secondary" />
                  </a>
                  <a href="">
                    <InstagramIcon className="text-secondary"/>
                  </a>
                  <a href="">
                    <TwitterIcon className="text-secondary"/>
                  </a>
                </div>
                <a href="" className="flex gap-4 items-center">
                  <CallIcon />
                  734-697-2907
                </a>
              </div>
            </div>
            <a href="" className="flex gap-4 items-center">
              <MapIcon />
              alotadilat@gmail.com
            </a>
            <div className="w-[40%]">
              <FormSubscription />
            </div>
          </div>
        </div>
        <p className="pb-4 text-xs text-white text-center">© 2022 | designed by whytech.ca</p>
      </div>
    </footer>
  );
};

export default Footer;
