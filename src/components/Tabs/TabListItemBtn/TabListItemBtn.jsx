import { PropTypes } from 'prop-types';
import React from 'react';

import Styles from './TabListItemBtn.module.scss';

export const TabListItemBtn = ({ items, selectedTab, handelChangeTab }) => {
  return (
    <>
      {items.map((item) => (
        <button
          key={item}
          className={`${Styles.tabs_list_item} ${
            selectedTab === item ? Styles.tabs_list_item_active : ''
          }`}
          onClick={() => handelChangeTab(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
};
TabListItemBtn.propTypes = {
  items: PropTypes.array.isRequired,
  handelChangeTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
