import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { SeeAllArrowIcon } from '../../Icons/SeeAllArrowIcon';

const SeeAll = ({ path, direction, text, styles, onClick }) => {
  const btnStyle = {
    color: 'inherit',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    gap: '1rem',
    fontWeight: '400',
    marginTop: '0.5rem',
    textTransform: 'capitalize',
    justifyContent: direction ? 'flex-end' : '',
    fontSize: '1.3rem',
  };
  let _style = styles ? styles : '';
  return (
    <Link
      to={path}
      className="flex items-center"
      style={btnStyle}
      onClick={onClick}
    >
      <span>{text ? text : null}</span>
      <span className="relative" style={{ ..._style }}>
        <SeeAllArrowIcon />
      </span>
    </Link>
  );
};

SeeAll.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.object,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};

export default SeeAll;
