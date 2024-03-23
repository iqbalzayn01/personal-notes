import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import CButton from "../../components/CButton";
import CInputLabel from "../../components/CInputLabel";

export default function FormRegister({
  isLoading,
  handleSubmit,
  valueName,
  valueEmail,
  valuePassword,
  valueConfirmPassword,
  onChange,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-5"
    >
      <CInputLabel
        htmlFor="name"
        label="Name"
        name="name"
        type="text"
        value={valueName}
        className="w-full text-input"
        classNameLabel="text-csecondary dark:text-white"
        placeholder="Name"
        onChange={onChange}
      />
      <CInputLabel
        htmlFor="email-address"
        label="Email address"
        name="email"
        type="email"
        value={valueEmail}
        className="w-full text-input"
        classNameLabel="text-csecondary dark:text-white"
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
        classNameLabel="text-csecondary dark:text-white"
        placeholder="Password"
        onChange={onChange}
      />
      <CInputLabel
        htmlFor="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={valueConfirmPassword}
        className="w-full text-input"
        classNameLabel="text-csecondary dark:text-white"
        placeholder="Confirm Password"
        onChange={onChange}
      />
      <CButton
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 px-5 py-2 text-center text-white rounded-lg"
        loading={isLoading}
        disabled={isLoading}
      >
        Register
      </CButton>
      <p className="text-csecondary dark:text-white">
        Already have an account?
        <Link to="/login" className="underline">
          Login here
        </Link>
      </p>
    </form>
  );
}

FormRegister.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueName: PropTypes.string,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  valueConfirmPassword: PropTypes.string,
  onChange: PropTypes.func,
};
