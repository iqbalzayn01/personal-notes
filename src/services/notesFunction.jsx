const addNote = (notes, setNotes, newNote) => {
  const updatedNotes = [
    ...notes,
    {
      id: notes.length + 1,
      createdAt: new Date().toISOString(),
      archived: false,
      ...newNote,
    },
  ];
  setNotes(updatedNotes);
};

const removeNote = (notes, setNotes, noteId) => {
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  setNotes(updatedNotes);
};

const toggleArchive = (notes, setNotes, noteId) => {
  const updatedNotes = notes.map((note) => {
    if (note.id === noteId) {
      return { ...note, archived: !note.archived };
    }
    return note;
  });
  setNotes(updatedNotes);
};

export { addNote, removeNote, toggleArchive };
