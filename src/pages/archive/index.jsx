import { useState, useEffect } from "react";

import { getArchivedNotes } from "../../utils/fetch";
import ThemeToggle from "../../components/ThemeToggle";
import Header from "../../components/Header";
import NotesList from "../notes/notesList";

export default function Archived() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const updateSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getArchivedNotes();
        const dataNotes = res.data;
        setNotes(dataNotes);
        setIsLoading(false);
      } catch (error) {
        console.error("Get Active Notes Error:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredArchivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onChange={updateSearch} />
      <section className="container-base px-5">
        <h1 className="font-semibold text-csecondary dark:text-white text-4xl pb-10">
          Archived Note
        </h1>
        <NotesList notes={filteredArchivedNotes} isLoading={isLoading} />
        <ThemeToggle className="fixed right-6 bottom-6 px-3 py-2 rounded-full bg-csecondary dark:bg-white text-white dark:text-csecondary" />
      </section>
    </>
  );
}
