import PropTypes from 'prop-types';
import "./styles.css"; // Import styles

export const Select = ({ options, value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
  options: []
};
