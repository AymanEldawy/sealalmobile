import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import React from 'react';
import Styles from './LinkBack.module.scss';
import { ArrowLeftBackIcon } from './../../Icons/ArrowLeftBackIcon';
export const LinkBack = ({ path, text, style }) => {
  return (
    <Link
      to={path}
      className={`flex items-center ${Styles.link_back}`}
      style={style}
    >
      <ArrowLeftBackIcon />
      {text ? text : null}
    </Link>
  );
};
LinkBack.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
};
