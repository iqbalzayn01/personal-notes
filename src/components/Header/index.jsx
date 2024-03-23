import PropTypes from "prop-types";

import SearchBar from "../Search";
import Navbar from "./navbar";

export default function Header({ onChange }) {
  const updateSearch = (term) => {
    onChange(term);
  };

  return (
    <header className="container-base px-5 py-10">
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-start justify-between">
          <h1 className="font-bold text-2xl text-csecondary dark:text-white">
            Personal <br /> Notes
          </h1>
          <Navbar />
        </div>
        <SearchBar placeholder="Search notes..." updateSearch={updateSearch} />
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};
