import { PropTypes } from 'prop-types';
import React, { useContext } from 'react';

import { GoogleIcon } from '../Icons/GoogleIcon';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const LoginWithGoogle = ({ handelLoginWithGoogle }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className={Styles.login_with_google}>
      <p>{fetchWord('loginWithText', lang)} </p>
      <a href={handelLoginWithGoogle} className="flex gap-2 items-center">
        <GoogleIcon />
        {fetchWord('google_account', lang)}
      </a>
    </div>
  );
};
LoginWithGoogle.propTypes = {
  handelLoginWithGoogle: PropTypes.string.isRequired,
};
