import React from "react";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center gap-8">
          <div className="flex-1">
            <h2 className="font-medium text-3xl mb-2 text-[#391400]">Alo Tadilat App</h2>
            <h3 className="text-[#391400] text-xl mb-4">Discover and appointment a lot of services</h3>
            <p className="text-[#979797] text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius dminim veniam, quis nostrud exercitation ullamco laboris nisi
              ut wr dminim veniam, quis nostrud exercitation ullamco laboris
              nisi ut wr
            </p>
            <div className="flex gap-4 justify-start items-start mt-8">
              <Image
                src="/images/google-play.png"
                alt="google play"
                width={260}
                height={50}
                className="h-14 object-contain w-fit rounded-md overflow-hidden"
              />
              <Image
                src="/images/app-store.png"
                alt="App store"
                width={260}
                height={50}
                className="h-14 object-contain w-fit rounded-md overflow-hidden"
              />
            </div>
          </div>
          <div className="flex-1">
            <figure className="relative">
              <Image
                className="object-cover w-full"
                src="/images/iphone-11-mockup.png"
                alt="phone mockup"
                height={400}
                width={230}
              />
              <span className="h-16 block w-full rounded-[50%] -translate-y-20 shadow-lg"></span>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
