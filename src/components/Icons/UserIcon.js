import React from "react";

const UserIcon = ({ ...classes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="1236 16 11 11"
      className="text-white"
      {...classes}
    >
      <path
        d="M1236 27v-1.375c0-1.513 2.475-2.75 5.5-2.75s5.5 1.237 5.5 2.75V27h-11Zm2.75-8.25a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
        fill="currentcolor"
        fill-rule="evenodd"
        data-name="Union 1"
      />
    </svg>
  );
};

export default UserIcon;
