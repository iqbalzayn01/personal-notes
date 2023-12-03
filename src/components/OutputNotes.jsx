import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { useState } from "react";

export const OutputNotes = ({
  notes,
  setNotes,
  updateNotes,
  filteredNotes,
}) => {
  const [activeMenu, setActiveMenu] = useState("notes");

  const toggleMenu = (menu) => {
    setActiveMenu(menu);
  };

  const removeNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  const archivedNote = (noteId) => {
    const update = notes.map((note) => {
      if (note.id === noteId) {
        note.archived = true;
      }
      return note;
    });
    updateNotes(update);
  };

  const returnNote = (noteId) => {
    const update = notes.map((note) => {
      if (note.id === noteId) {
        note.archived = false;
      }
      return note;
    });
    updateNotes(update);
  };
  return (
    <>
      <div className="container">
        <div className="wrap-menu">
          <button
            type="button"
            id="openNotes"
            style={{
              fontWeight: activeMenu === "notes" ? 700 : 400,
              color:
                activeMenu === "notes"
                  ? "rgb(255, 255, 255)"
                  : "rgb(138, 138, 138)",
            }}
            onClick={() => toggleMenu("notes")}
          >
            Notes
          </button>
          <button
            type="button"
            id="openArchived"
            style={{
              fontWeight: activeMenu === "archived" ? 700 : 400,
              color:
                activeMenu === "notes"
                  ? "rgb(138, 138, 138)"
                  : "rgb(255, 255, 255)",
            }}
            onClick={() => toggleMenu("archived")}
          >
            Archived
          </button>
        </div>
      </div>

      <section
        className={`container ${activeMenu === "notes" ? "" : "nonactive"}`}
      >
        <div>
          {filteredNotes.filter((noteItem) => !noteItem.archived).length > 0 ? (
            <ul className="wrap-items">
              {filteredNotes
                .filter((noteItem) => !noteItem.archived)
                .map((note) => (
                  <li key={note.id} className="item-note">
                    <div className="wrap-note">
                      <h2>{note.title}</h2>
                      <p>{note.body}</p>
                      <p>{showFormattedDate(note.createdAt)}</p>
                    </div>
                    <div className="wrap-btn">
                      <button
                        id="btnDelete"
                        type="button"
                        onClick={() => removeNote(note.id)}
                      >
                        Delete
                      </button>
                      <button
                        id="btnArchive"
                        type="button"
                        onClick={() => archivedNote(note.id)}
                      >
                        Archive
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <p>There are no notes.</p>
          )}
        </div>
      </section>

      <section
        className={`container ${activeMenu === "archived" ? "" : "nonactive"}`}
      >
        <div>
          {filteredNotes.filter((noteItem) => noteItem.archived).length > 0 ? (
            <ul className="wrap-items">
              {filteredNotes
                .filter((noteItem) => noteItem.archived)
                .map((note) => (
                  <li key={note.id} className="item-note">
                    <div className="wrap-note">
                      <h2>{note.title}</h2>
                      <p>{note.body}</p>
                      <p>{showFormattedDate(note.createdAt)}</p>
                    </div>
                    <div className="wrap-btn">
                      <button
                        id="btnDelete"
                        type="button"
                        onClick={() => removeNote(note.id)}
                      >
                        Delete
                      </button>
                      <button
                        id="btnArchive"
                        type="button"
                        onClick={() => returnNote(note.id)}
                      >
                        Return
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <p>There are no notes.</p>
          )}
        </div>
      </section>
    </>
  );
};

OutputNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  filteredNotes: PropTypes.array.isRequired,
  setNotes: PropTypes.func.isRequired,
  updateNotes: PropTypes.func.isRequired,
};
