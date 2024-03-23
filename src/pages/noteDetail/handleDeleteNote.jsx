import PropTypes from "prop-types";

import CButton from "../../components/CButton";

export default function HandleDeleteNote({ handleDeleteNote, isLoading }) {
  return (
    <CButton
      type="button"
      onClick={handleDeleteNote}
      className="hover:bg-red-400 text-4xl bg-white rounded-full p-3 cursor-pointer"
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
          d="M29.1667 87.5C26.8751 87.5 24.914 86.6847 23.2834 85.0542C21.6529 83.4236 20.8362 81.4611 20.8334 79.1667V25H16.6667V16.6667H37.5001V12.5H62.5001V16.6667H83.3334V25H79.1667V79.1667C79.1667 81.4583 78.3515 83.4208 76.7209 85.0542C75.0904 86.6875 73.1279 87.5028 70.8334 87.5H29.1667ZM37.5001 70.8333H45.8334V33.3333H37.5001V70.8333ZM54.1667 70.8333H62.5001V33.3333H54.1667V70.8333Z"
          fill="black"
        />
      </svg>
    </CButton>
  );
}

HandleDeleteNote.propTypes = {
  handleDeleteNote: PropTypes.func,
  isLoading: PropTypes.bool,
};
