import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Notes from "../pages/notes";
import Archived from "../pages/archive";
import FormInputNotes from "../pages/formInputNotes";
import NoteDetail from "../pages/noteDetail";
import { getInitialData, showFormattedDate } from "../utils";
import { addNote, removeNote, toggleArchive } from "../services/notesFunction";

export const AppRoutes = () => {
  const [notes, setNotes] = useState(getInitialData());

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Notes
            notes={notes}
            removeNote={(noteId) => removeNote(notes, setNotes, noteId)}
            toggleArchive={(noteId) => toggleArchive(notes, setNotes, noteId)}
            showFormattedDate={showFormattedDate}
          />
        }
      />
      <Route
        path="/form-input"
        element={
          <FormInputNotes
            addNote={(newNote) => addNote(notes, setNotes, newNote)}
          />
        }
      />
      <Route
        path="/archived"
        element={
          <Archived
            notes={notes}
            removeNote={(noteId) => removeNote(notes, setNotes, noteId)}
            toggleArchive={(noteId) => toggleArchive(notes, setNotes, noteId)}
            showFormattedDate={showFormattedDate}
          />
        }
      />
      <Route
        path="/notes/:id"
        element={
          <NoteDetail
            notes={notes}
            removeNote={(noteId) => removeNote(notes, setNotes, noteId)}
            toggleArchive={(noteId) => toggleArchive(notes, setNotes, noteId)}
            showFormattedDate={showFormattedDate}
          />
        }
      />
    </Routes>
  );
};
