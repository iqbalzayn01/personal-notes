import { useState, useEffect } from "react";
import { Notes } from "./components/Notes";
import { OutputNotes } from "./components/OutputNotes";
import { getInitialData } from "./utils";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([...notes]);

  useEffect(() => {
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [searchTerm, notes]);

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
  };
  return (
    <>
      <Notes
        updateNotes={updateNotes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <OutputNotes
        notes={notes}
        setNotes={setNotes}
        updateNotes={updateNotes}
        filteredNotes={filteredNotes}
      />
    </>
  );
}
