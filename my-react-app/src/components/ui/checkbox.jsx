import PropTypes from 'prop-types';
import "./styles.css";

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
  checked: false
};
