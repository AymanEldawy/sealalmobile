import Link from "next/link";
import React from "react";

const PrimaryLink = ({ link, children, outline, className }) => {
  return (
    <Link
      href={link}
      className={`${outline ? "text-primary border border-primary hover:!bg-primary hover:!text-white" : "text-white bg-primary"} block w-fit text-sm capitalize rounded-md text-center border p-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
