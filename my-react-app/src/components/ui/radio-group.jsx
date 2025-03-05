import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";

export const RadioGroup = ({ children, name }) => {
  return (
    <div className="radio-group">
      {React.Children.map(children, child => 
        React.isValidElement(child) 
          ? React.cloneElement(child, { name })
          : child
      )}
    </div>
  );
};

export const Radio = ({ label, value, checked, onChange, name }) => {
  const handleChange = (e) => {
    onChange && onChange(e);
  };

  return (
    <label className="radio-label">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="radio-input"
      />
      <span className="radio-text">{label}</span>
    </label>
  );
};

RadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};
