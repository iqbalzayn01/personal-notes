import PropTypes from "prop-types";

import SearchBar from "../Search";
import Navbar from "./navbar";

export default function Header({ onChange }) {
  const updateSearch = (term) => {
    onChange(term);
  };

  return (
    <header className="container-base px-5 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl text-white">
          Personal <br /> Notes
        </h1>
        <SearchBar placeholder="Search notes..." updateSearch={updateSearch} />
        <Navbar />
      </div>
    </header>
  );
}

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};
