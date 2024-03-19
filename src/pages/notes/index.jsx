import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import NotesList from "./notesList";

export default function Notes({
  notes,
  removeNote,
  toggleArchive,
  showFormattedDate,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const updateSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onChange={updateSearch} />
      <section className="container-base px-5 py-5">
        <NotesList
          notes={filteredNotes.filter((note) => !note.archived)}
          removeNote={removeNote}
          toggleArchive={toggleArchive}
          showFormattedDate={showFormattedDate}
        />
        <button
          type="button"
          onClick={() => {
            navigate("/form-input");
          }}
          className="fixed right-6 bottom-6  text-4xl bg-white rounded-full p-3 cursor-pointer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8334 54.1666H20.8334V45.8333H45.8334V20.8333H54.1667V45.8333H79.1667V54.1666H54.1667V79.1666H45.8334V54.1666Z"
              fill="black"
            />
          </svg>
        </button>
      </section>
    </>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};
