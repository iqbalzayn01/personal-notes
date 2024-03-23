import PropTypes from "prop-types";

import CButton from "../../components/CButton";

export default function HandleUnarchiveNote({
  handleUnarchiveNote,
  isLoading,
}) {
  return (
    <CButton
      type="button"
      onClick={handleUnarchiveNote}
      className="hover:bg-yellow-400 text-4xl bg-white rounded-full p-3 cursor-pointer"
      loading={isLoading}
      disabled={isLoading}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.1666 12.5C44.221 12.5 34.6827 16.4509 27.6501 23.4835C20.6175 30.5161 16.6666 40.0544 16.6666 50H4.16663L20.375 66.2083L20.6666 66.7917L37.5 50H25C25 33.875 38.0416 20.8333 54.1666 20.8333C70.2916 20.8333 83.3333 33.875 83.3333 50C83.3333 66.125 70.2916 79.1667 54.1666 79.1667C46.125 79.1667 38.8333 75.875 33.5833 70.5833L27.6666 76.5C31.1392 79.9917 35.2687 82.7614 39.8169 84.6494C44.3651 86.5373 49.2421 87.5061 54.1666 87.5C64.1122 87.5 73.6505 83.5491 80.6831 76.5165C87.7157 69.4839 91.6666 59.9456 91.6666 50C91.6666 40.0544 87.7157 30.5161 80.6831 23.4835C73.6505 16.4509 64.1122 12.5 54.1666 12.5ZM50 33.3333V54.1667L67.8333 64.75L70.8333 59.7083L56.25 51.0417V33.3333H50Z"
          fill="black"
        />
      </svg>
    </CButton>
  );
}

HandleUnarchiveNote.propTypes = {
  handleUnarchiveNote: PropTypes.func,
  isLoading: PropTypes.bool,
};
