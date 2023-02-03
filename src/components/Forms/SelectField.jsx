import { PropTypes } from 'prop-types';
import React from 'react';

import Styles from './SelectField.module.scss';

export const SelectField = ({
  name,
  label,
  handleChange,
  value,
  list,
  required,
  errors,
  onBlur,
}) => {
  return (
    <div
      className={[
        Styles.form_group,
        errors?.length ? Styles.form_group_error : '',
      ].join(' ')}
    >
      <label>
        {label}
        {errors?.length ? (
          <span className={Styles.label_error}>{errors[0]}</span>
        ) : null}
      </label>

      <select
        name={name}
        onChange={handleChange}
        value={value}
        required={required}
        onBlur={!!onBlur ? onBlur : undefined}
        defaultValue={list?.length ? list[0] : null}
      >
        {list &&
          list?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {item?.name}{' '}
            </option>
          ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.array,
  onBlur: PropTypes.func,
};
