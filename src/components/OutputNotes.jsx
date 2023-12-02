// import { useState } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

export const OutputNotes = ({ notes, setNotes }) => {
  // const [notes, setNotes] = useState(getInitialData());

  const removeNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };
  return (
    <>
      <section className="container output-notes">
        <ul className="wrap-items">
          {notes.map((item) => (
            <li key={item.id} className="item-note">
              <div className="wrap-note">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <p>{showFormattedDate(item.createdAt)}</p>
              </div>
              <div className="wrap-btn">
                <button
                  id="btnDelete"
                  type="button"
                  onClick={() => removeNote(item.id)}
                >
                  Delete
                </button>
                <button id="btnArchive" type="button">
                  Archive
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <div className="archive">
          <h2>Archive</h2>
        </div>
      </section>
    </>
  );
};

OutputNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
};
