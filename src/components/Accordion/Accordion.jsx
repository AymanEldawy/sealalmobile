import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import { ChevronIcon } from '../Icons/ChevronIcon';
import Styles from './Accordion.module.scss';

export const Accordion = ({ label, children, direction }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={Styles.accordion}>
      <button onClick={() => setOpen(!open)} className={Styles.accordion_btn}>
        {label}
        {direction === 'horizontal' ? (
          <span
            className={Styles.arrow_icon_horizontal}
            style={{ transform: open ? 'rotate(-90deg)' : '' }}
          >
            <ChevronIcon />
          </span>
        ) : (
          <span
            className={Styles.arrow_icon}
            style={{ transform: open ? 'rotate(90deg)' : '' }}
          >
            <ChevronIcon />
          </span>
        )}
      </button>
      <div className="divider" />
      {open && <div className={Styles.accordion_body}>{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};
