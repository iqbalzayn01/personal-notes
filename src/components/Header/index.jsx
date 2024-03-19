import PropTypes from "prop-types";

import SearchBar from "../Search";
import Navbar from "./navbar";

export default function Header({ onChange }) {
  const updateSearch = (term) => {
    onChange(term);
  };

  return (
    <header className="container-base px-5 py-10">
      <div className="flex items-start justify-between">
        <h1 className="font-bold text-2xl text-white">
          Personal <br /> Notes
        </h1>
        <div className="grid md:grid-cols-2 gap-2 md:gap-1">
          <Navbar />
          <SearchBar
            placeholder="Search notes..."
            updateSearch={updateSearch}
          />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};
