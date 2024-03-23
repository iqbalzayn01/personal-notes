import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CButton from "../../components/CButton";
import CInputLabel from "../../components/CInputLabel";

export default function FormLogin({
  isLoading,
  handleSubmit,
  valueEmail,
  valuePassword,
  onChange,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <CInputLabel
        htmlFor="email-address"
        label="Email address"
        name="email"
        type="email"
        value={valueEmail}
        className="w-full text-input"
        classNameLabel="text-white"
        placeholder="Email address"
        onChange={onChange}
      />
      <CInputLabel
        htmlFor="password"
        label="Password"
        name="password"
        type="password"
        value={valuePassword}
        className="w-full text-input"
        classNameLabel="text-white"
        placeholder="Password"
        onChange={onChange}
      />
      <CButton
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-center text-white rounded-lg"
        loading={isLoading}
        disabled={isLoading}
      >
        Sign In
      </CButton>
      <p className="text-white">
        Don&quot;t have an account?
        <Link to="/register" className="underline">
          Register here
        </Link>
      </p>
    </form>
  );
}

FormLogin.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChange: PropTypes.func,
};
