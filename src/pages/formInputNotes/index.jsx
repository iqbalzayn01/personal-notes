import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import CButton from "../../components/CButton";
import { addNote } from "../../utils/fetch";

export default function FormInputNotes() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const newNoteBodyRef = useRef(null);
  const [remainingCharacters, setRemainingCharacters] = useState(50);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, title: value });
    setRemainingCharacters(50 - formData.title.length);
  };

  const handleBodyChange = () => {
    const newNoteBody = newNoteBodyRef.current.innerText;
    setFormData({ ...formData, body: newNoteBody });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNote(formData);
      navigate("/");
    } catch (error) {
      console.error("FORM_INPUT_NOTES_ERROR:", error);
    }
  };

  return (
    <section className="container-base max-w-[900px] p-5">
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
          value={formData.title}
          onChange={handleTitleChange}
          maxLength={50}
          className="bg-transparent font-semibold text-4xl text-white outline-none"
          required
        />
        <hr />
        <div
          ref={newNoteBodyRef}
          id="note"
          className="bg-transparent h-auto font-semibold text-xl text-white border border-white outline-none p-5 rounded-xl"
          contentEditable
          data-placeholder="Add your note . . ."
          onInput={handleBodyChange}
        />
        <CButton
          type="submit"
          className="fixed right-6 bottom-6 w-[60px] h-[60px] text-4xl bg-white rounded-full p-1 cursor-pointer"
        >
          ✓
        </CButton>
        <Link to="/" className="text-white hover:underline">
          {`< Back to Notes`}
        </Link>
      </form>
    </section>
  );
}
