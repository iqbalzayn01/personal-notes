import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";

import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../../utils/fetch";
import { showFormattedDate } from "../../utils";
import { useTheme } from "../../components/ThemeContext";
import ThemeToggle from "../../components/ThemeToggle";
import HandleDeleteNote from "./handleDeleteNote";
import HandleArchiveNote from "./handleArchiveNote";
import HandleUnarchiveNote from "./handleUnarchiveNote";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNote(id);
        setNote(res.data);
      } catch (error) {
        console.error("NOTE_DETAIL_ERROR:", error);
        setIsLoading(true);
      }
    };

    fetchData();
  }, [id]);

  const parseNoteBody = (body) => {
    const paragraphs = body.split(/\n+/).map((paragraph, index) => {
      return `<p key=${index}>${paragraph}</p>`;
    });

    return paragraphs.join("");
  };

  const handleDeleteNote = async () => {
    setIsLoading(true);
    try {
      await deleteNote(note.id);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error("DELETE_NOTE_ERROR:", error);
      setIsLoading(false);
    }
  };

  const handleArchiveNote = async () => {
    setIsLoading(true);
    try {
      await archiveNote(note.id);
      setNote((prevNote) => ({ ...prevNote, archived: true }));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error("ARCHIVE_NOTE_ERROR:", error);
      setIsLoading(false);
    }
  };

  const handleUnarchiveNote = async () => {
    setIsLoading(true);
    try {
      await unarchiveNote(note.id);
      setNote((prevNote) => ({ ...prevNote, archived: false }));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.error("ARCHIVE_NOTE_ERROR:", error);
      setIsLoading(false);
    }
  };

  return (
    <section className={`${theme === "dark" ? "light" : "dark"}`}>
      <div className="container-base max-w-[900px] p-5">
        {isLoading ? (
          <div className="text-csecondary dark:text-white">Loading...</div>
        ) : (
          <>
            {note ? (
              <>
                <div className="flex flex-col justify-center gap-5">
                  <h2 className="text-4xl text-csecondary dark:text-white">
                    {note.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {showFormattedDate(note.createdAt)}
                  </p>
                  <div className="flex flex-col gap-2 text-csecondary dark:text-white">
                    {parser(parseNoteBody(note.body))}
                  </div>
                  {note.archived === false && (
                    <Link
                      to="/"
                      className="text-csecondary dark:text-white hover:underline"
                    >
                      {`< Back to Notes`}
                    </Link>
                  )}
                  {note.archived === true && (
                    <Link
                      to="/archived"
                      className="text-csecondary dark:text-white hover:underline"
                    >
                      {`< Back to Notes`}
                    </Link>
                  )}
                </div>
                <div className="fixed right-6 bottom-6 flex flex-col items-end gap-5">
                  <ThemeToggle className="px-3 py-2 rounded-full bg-csecondary dark:bg-white text-white dark:text-csecondary" />
                  <div className="flex items-center gap-5">
                    <HandleDeleteNote
                      handleDeleteNote={handleDeleteNote}
                      isLoading={isLoading}
                    />
                    {note.archived === false && (
                      <HandleArchiveNote
                        handleArchiveNote={handleArchiveNote}
                        isLoading={isLoading}
                      />
                    )}
                    {note.archived === true && (
                      <HandleUnarchiveNote
                        handleUnarchiveNote={handleUnarchiveNote}
                        isLoading={isLoading}
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-white">No note found.</div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default NoteDetail;
