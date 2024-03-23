import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { getAccessToken } from "../utils/fetch";

export default function PrivateRoute({ element }) {
  if (!getAccessToken()) return <Navigate to="/login" replace={true} />;

  return element;
}

PrivateRoute.propTypes = {
  element: PropTypes.element,
};
