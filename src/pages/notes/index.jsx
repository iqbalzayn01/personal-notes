import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getActiveNotes } from "../../utils/fetch";
import Header from "../../components/Header";
import NotesList from "./notesList";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
    <>
      <Header onChange={updateSearch} />
      <section className="container-base px-5 py-5">
        <h1 className="font-semibold text-white text-4xl pb-10">Notes</h1>
        <NotesList
          isLoading={isLoading}
          notes={filteredNotes.filter((note) => !note.archived)}
        />
        <button
          type="button"
          onClick={() => {
            navigate("/form-input");
          }}
          className="fixed right-6 bottom-6  text-4xl bg-white rounded-full p-3 cursor-pointer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8334 54.1666H20.8334V45.8333H45.8334V20.8333H54.1667V45.8333H79.1667V54.1666H54.1667V79.1666H45.8334V54.1666Z"
              fill="black"
            />
          </svg>
        </button>
      </section>
    </>
  );
}
