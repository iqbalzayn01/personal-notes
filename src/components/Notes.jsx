import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getInitialData } from "../utils";

export const Notes = ({ updateNotes, searchTerm, setSearchTerm }) => {
  const [notes, setNotes] = useState(getInitialData());
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteBody, setNewNoteBody] = useState("");
  const RENDER_EVENT = "render_event";

  useEffect(() => {
    const formNotes = document.getElementById("formNotes");
    formNotes.addEventListener("submit", (event) => {
      event.preventDefault();
      addNote();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.dispatchEvent(new Event(RENDER_EVENT));
  }, [notes]);

  const addNote = () => {
    if (newNoteTitle && newNoteBody) {
      const newNote = {
        id: notes.length + 1,
        title: newNoteTitle,
        body: newNoteBody,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNewNoteTitle("");
      setNewNoteBody("");
      document.dispatchEvent(new Event(RENDER_EVENT));
      updateNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header className="container">
        <h1>Notes</h1>
        <form id="searchNote">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search note . . ."
            onChange={handleSearchChange}
          />
        </form>
      </header>
      <section className="container notes">
        <form
          id="formNotes"
          onSubmit={(event) => {
            event.preventDefault();
            addNote();
          }}
        >
          <p>Remaining characters: 50.</p>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
            maxLength={50}
            required
          />
          <hr />
          <textarea
            name="note"
            id="note"
            placeholder="Add your note"
            cols="30"
            rows="10"
            value={newNoteBody}
            onChange={(e) => setNewNoteBody(e.target.value)}
            required
          ></textarea>
          <input
            type="submit"
            value="Submit"
            name="Submit"
            className="btn-submit"
          />
        </form>
      </section>
    </>
  );
};

Notes.propTypes = {
  updateNotes: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
