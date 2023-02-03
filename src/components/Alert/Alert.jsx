import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import { CloseIcon } from './../Icons/CloseIcon';
import Styles from './Alert.module.scss';

export const Alert = ({ type, children, allowClose }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {!allowClose ? (
        <div className={[Styles[type], Styles.alert].join(' ')}>{children}</div>
      ) : (
        <>
          {open && (
            <div className={[Styles[type], Styles.alert].join(' ')}>
              {children}{' '}
              <button onClick={() => setOpen(false)}>
                <CloseIcon />{' '}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  allowClose: PropTypes.bool,
};
