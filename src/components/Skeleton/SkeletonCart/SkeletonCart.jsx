import React from 'react';

import Styles from './SkeletonCart.module.scss';

export const SkeletonCart = () => {
  return (
    <tr>
      <td className={Styles.skeleton_cart_img_container1}>
        <div className={Styles.skeleton_cart_img}></div>
      </td>
      <td>
        <p className={Styles.skeleton_cart_text}></p>
        {/* <p className={Styles.skeleton_cart_text}></p> */}
      </td>
      <td>
        <span className={Styles.skeleton_cart_short_quantity}></span>
      </td>
      <td>
        <span className={Styles.skeleton_cart_short}></span>
      </td>
      <td>
        <span className={Styles.skeleton_cart_circle}></span>
      </td>
    </tr>
  );
};
