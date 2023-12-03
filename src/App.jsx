import { useState } from "react";
import { Notes } from "./components/Notes";
import { OutputNotes } from "./components/OutputNotes";
import { getInitialData } from "./utils";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());

  const updateNotes = (newNotes) => {
    setNotes(newNotes);
  };
  return (
    <>
      <Notes updateNotes={updateNotes} />
      <OutputNotes
        notes={notes}
        setNotes={setNotes}
        updateNotes={updateNotes}
      />
    </>
  );
}
