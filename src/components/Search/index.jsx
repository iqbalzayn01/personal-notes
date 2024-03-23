import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, updateSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    updateSearch(newSearchTerm);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("keyword", newSearchTerm);
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <form className="border-b">
      <input
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full bg-transparent text-white border-0 outline-none pb-2"
      />
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  updateSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: "Search...",
};

export default SearchBar;
