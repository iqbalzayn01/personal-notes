import PropTypes from "prop-types";

import CButton from "../../components/CButton";

export default function HandleArchiveNote({ handleArchiveNote, isLoading }) {
  return (
    <CButton
      type="button"
      onClick={handleArchiveNote}
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
          d="M50 75L66.6667 58.3334L60.8333 52.5L54.1667 59.1667V41.6667H45.8333V59.1667L39.1667 52.5L33.3333 58.3334L50 75ZM20.8333 87.5C18.5417 87.5 16.5806 86.6847 14.95 85.0542C13.3194 83.4236 12.5028 81.4611 12.5 79.1667V27.1875C12.5 26.2153 12.6569 25.2778 12.9708 24.375C13.2847 23.4722 13.7528 22.6389 14.375 21.875L19.5833 15.5209C20.3472 14.5486 21.3014 13.8014 22.4458 13.2792C23.5903 12.757 24.7889 12.4972 26.0417 12.5H73.9583C75.2083 12.5 76.4069 12.7611 77.5542 13.2834C78.7014 13.8056 79.6555 14.5514 80.4167 15.5209L85.625 21.875C86.25 22.6389 86.7194 23.4722 87.0333 24.375C87.3472 25.2778 87.5028 26.2153 87.5 27.1875V79.1667C87.5 81.4584 86.6847 83.4209 85.0542 85.0542C83.4236 86.6875 81.4611 87.5028 79.1667 87.5H20.8333ZM22.5 25H77.5L73.9583 20.8334H26.0417L22.5 25Z"
          fill="black"
        />
      </svg>
    </CButton>
  );
}

HandleArchiveNote.propTypes = {
  handleArchiveNote: PropTypes.func,
  isLoading: PropTypes.bool,
};
