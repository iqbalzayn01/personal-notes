import PropTypes from "prop-types";

export default function CButton({
  type,
  onClick,
  className,
  children,
  loading,
  disabled,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

CButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  // children: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
