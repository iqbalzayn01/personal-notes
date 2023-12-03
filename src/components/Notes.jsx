import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getInitialData } from "../utils";

export const Notes = ({ updateNotes }) => {
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

  return (
    <>
      <section className="container notes">
        <form
          id="formNotes"
          onSubmit={(event) => {
            event.preventDefault();
            addNote();
          }}
        >
          <textarea
            name="title"
            id="title"
            placeholder="Title"
            cols="30"
            rows="4"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          ></textarea>
          <hr />
          <textarea
            name="note"
            id="note"
            placeholder="Add your note"
            cols="30"
            rows="10"
            value={newNoteBody}
            onChange={(e) => setNewNoteBody(e.target.value)}
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
};
