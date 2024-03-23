import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getActiveNotes } from "../../utils/fetch";
import { useTheme } from "../../components/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import CButton from "../../components/CButton";
import Header from "../../components/Header";
import NotesList from "./notesList";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const navigate = useNavigate();

  const updateSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getActiveNotes();
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

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={`${theme === "dark" ? "light" : "dark"}`}>
      <Header onChange={updateSearch} />
      <section className="container-base px-5 py-5">
        <h1 className="font-semibold text-csecondary dark:text-white text-4xl pb-10">
          Notes
        </h1>
        <NotesList
          isLoading={isLoading}
          notes={filteredNotes.filter((note) => !note.archived)}
        />
        <div className="fixed right-6 bottom-6 flex flex-col items-end gap-5">
          <ThemeToggle className="px-3 py-2 rounded-full bg-csecondary dark:bg-white text-white dark:text-csecondary" />
          <CButton
            type="button"
            onClick={() => {
              navigate("/form-input");
            }}
            className="text-4xl bg-csecondary dark:bg-white rounded-full p-3 cursor-pointer"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white dark:fill-csecondary"
            >
              <path d="M45.8334 54.1666H20.8334V45.8333H45.8334V20.8333H54.1667V45.8333H79.1667V54.1666H54.1667V79.1666H45.8334V54.1666Z" />
            </svg>
          </CButton>
        </div>
      </section>
    </main>
  );
}
