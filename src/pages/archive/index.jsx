import { useState } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import NotesList from "../notes/notesList";

export default function Archived({
  notes,
  removeNote,
  toggleArchive,
  showFormattedDate,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredArchivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onChange={updateSearch} />
      <section className="container-base px-5 ">
        <NotesList
          notes={filteredArchivedNotes}
          removeNote={removeNote}
          toggleArchive={toggleArchive}
          showFormattedDate={showFormattedDate}
        />
      </section>
    </>
  );
}

Archived.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};
