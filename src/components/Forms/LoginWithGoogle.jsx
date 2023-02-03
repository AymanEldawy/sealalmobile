import { PropTypes } from 'prop-types';
import React from 'react';

import { GoogleIcon } from '../Icons/GoogleIcon';

export const LoginWithGoogle = ({ handelLoginWithGoogle }) => {
  return (
    <div className={Styles.login_with_google}>
      <p>Enter your email and password for login or continue with </p>
      <a href={handelLoginWithGoogle} className="flex gap-2 items-center">
        <GoogleIcon />
        Google account
      </a>
    </div>
  );
};
LoginWithGoogle.propTypes = {
  handelLoginWithGoogle: PropTypes.string.isRequired,
};
