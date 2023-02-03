import React from 'react';

import Styles from './SkeletonCard.module.scss';

export const SkeletonCard = () => {
  return (
    <div className={Styles.skeleton_card}>
      <div className={Styles.skeleton_card_img}>
        <span className={Styles.skeleton_card_circle}></span>
      </div>
      <div className="px-4">
        <p className={Styles.skeleton_card_text}></p>
        <div className={Styles.skeleton_card_description}>
          <p className={Styles.skeleton_card_text}></p>
          <p className={Styles.skeleton_card_text}></p>
        </div>
      </div>
      <div className={`${Styles.skeleton_card_footer} px-4`}>
        <div className="flex">
          <span className={Styles.skeleton_card_circle}></span>
          <span className={Styles.skeleton_card_circle}></span>
          <span className={Styles.skeleton_card_circle}></span>
          <span className={Styles.skeleton_card_circle}></span>
          <span className={Styles.skeleton_card_circle}></span>
        </div>
        <div className="flex items-center justify-between">
          <span className={Styles.skeleton_card_short}></span>
          <span className={Styles.skeleton_card_short}></span>
        </div>
      </div>
    </div>
  );
};
