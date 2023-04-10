import React from "react";

const TabsContent = ({ children, activeTabName }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        console.log(child, activeTabName, child?.props?.tabName === activeTabName)
        if (child?.props?.tabName === activeTabName) return child;
      })}
    </div>
  );
};

export default TabsContent;
