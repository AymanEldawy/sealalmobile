import { PropTypes } from 'prop-types';
import React from 'react';

export const TabsContent = ({ children, selectedTab }) => {
  return (
    <div>
      {children.map((child) =>
        child.props.tabName === selectedTab ? child : null
      )}
    </div>
  );
};

TabsContent.propTypes = {
  children: PropTypes.node,
  selectedTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
