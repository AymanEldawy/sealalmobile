import { PropTypes } from 'prop-types';
import React from 'react';

import { StatusBarDot } from '../StatusBar/StatusBarDot/StatusBarDot';
import { StatusBarLine } from './../StatusBar/StatusBarLine';
import { TabListItemBtn } from './TabListItemBtn/TabListItemBtn';
import Styles from './TabsList.module.scss';

export const TabsList = ({ items, handelChangeTab, selectedTab }) => {
  return (
    <>
      {!!handelChangeTab ? (
        <div className={Styles.tabs_item}>
          <TabListItemBtn
            items={items}
            handelChangeTab={handelChangeTab}
            selectedTab={selectedTab}
          />
        </div>
      ) : (
        <div className={Styles.tabs_list_container}>
          {items.map((item, index) => (
            <div
              key={item}
              className={`${Styles.tabs_list_item} ${
                Styles.tabs_list_item_dots
              } ${
                selectedTab >= index + 2 || selectedTab === items.length
                  ? Styles.tabs_list_item_active
                  : ''
              }`}
            >
              {item}
            </div>
          ))}
          <div className={Styles.tabs_dots_container}>
            <StatusBarDot
              active={selectedTab > 1}
              current={selectedTab === 1}
            />
            <StatusBarLine
              active={selectedTab > 1}
              style={{
                border: selectedTab > 1 ? '1px solid' : '1px dashed #448c91',
              }}
            />
            <StatusBarDot
              active={selectedTab > 2}
              current={selectedTab === 2}
            />
            <StatusBarLine
              active={selectedTab > 2}
              style={{
                border: selectedTab > 2 ? '1px solid' : '1px dashed #448c91 ',
              }}
            />
            <StatusBarDot
              active={selectedTab === 3}
              current={selectedTab === 3}
            />
          </div>
        </div>
      )}
    </>
  );
};

TabsList.propTypes = {
  items: PropTypes.array.isRequired,
  handelChangeTab: PropTypes.func,
  selectedTab: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
