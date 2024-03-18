import PropTypes from "prop-types";

export default function CButton({ type, onClick, className, children }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

CButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.string,
};
