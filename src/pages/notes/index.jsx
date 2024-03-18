import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import CButton from "../../components/CButton";
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
      <section className="container-base px-5">
        <NotesList
          notes={filteredNotes.filter((note) => !note.archived)}
          removeNote={removeNote}
          toggleArchive={toggleArchive}
          showFormattedDate={showFormattedDate}
        />
        <CButton
          type="button"
          onClick={() => {
            navigate("/form-input");
          }}
          className="fixed right-6 bottom-6 w-[80px] h-[80px] text-4xl bg-white rounded-full px-6 py-5 cursor-pointer"
        >
          +
        </CButton>
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
