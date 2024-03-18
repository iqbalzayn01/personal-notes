import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function FormInputNotes({ addNote }) {
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const newNoteBodyRef = useRef(null);
  const [remainingCharacters, setRemainingCharacters] = useState(50);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    setNewNoteTitle(inputText);
    setRemainingCharacters(50 - inputText.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNoteTitle && newNoteBodyRef.current) {
      const newNoteBody = newNoteBodyRef.current.innerText;
      addNote({
        title: newNoteTitle,
        body: newNoteBody,
      });
      setNewNoteTitle("");
      newNoteBodyRef.current.innerText = "";
      navigate("/");
    }
  };

  return (
    <section className="container-base p-5">
      <form
        onSubmit={handleSubmit}
        className="flex h-screen flex-col justify-center gap-5"
      >
        <p className="text-white">
          Remaining characters: {remainingCharacters}
        </p>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={newNoteTitle}
          onChange={handleTitleChange}
          maxLength={50}
          className="bg-transparent font-semibold text-4xl text-white outline-none"
          required
        />
        <hr />
        <div
          ref={newNoteBodyRef}
          id="note"
          className="bg-transparent min-h-[150px] font-semibold text-xl text-white border border-white outline-none p-2 rounded-xl"
          contentEditable
          data-placeholder="Add your note . . ."
        />
        <input
          type="submit"
          value="Submit"
          name="Submit"
          className="bg-transparent hover:bg-white text-white hover:text-black border border-white rounded-lg px-6 py-5 cursor-pointer"
        />
        <Link to="/" className="text-white hover:underline">
          {`< Back to Notes`}
        </Link>
      </form>
    </section>
  );
}

FormInputNotes.propTypes = {
  addNote: PropTypes.func.isRequired,
};
