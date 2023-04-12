import React from "react";

const ProfileHeaderInfo = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3 className="text-primary text-xl flex gap-1 items-center font-medium">{title}</h3>
      <p className="text-lead text-sm capitalize">{subtitle}</p>
    </div>
  );
};

export default ProfileHeaderInfo;
