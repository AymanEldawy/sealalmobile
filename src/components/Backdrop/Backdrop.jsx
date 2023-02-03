import { PropTypes } from 'prop-types';
import React from 'react';

import Styles from './Backdrop.module.scss'

const Backdrop = ({ backdrop, closeMenu, zIndex, preventClose }) => {
  const style = {
    opacity: backdrop ? '.4' : '0',
    pointerEvents: backdrop ? 'unset' : 'none',
    zIndex: zIndex ? zIndex : 5,
  };
  return (
    <div
      onClick={() => (preventClose ? undefined : closeMenu('backdrop'))}
      className={Styles.backdrop}
      style={style}
    ></div>
  );
};

Backdrop.propTypes = {
  backdrop: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  zIndex: PropTypes.number,
  preventClose: PropTypes.bool,
};

export default Backdrop;
