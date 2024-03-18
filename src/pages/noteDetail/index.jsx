import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const NoteDetail = ({
  notes,
  removeNote,
  toggleArchive,
  showFormattedDate,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const foundNote = notes.find((item) => item.id === parseInt(id, 10));
    setNote(foundNote);
  }, [id, notes]);

  const handleDelete = (id) => {
    removeNote(id);
    navigate("/");
  };

  const handleToggleArchive = (id) => {
    toggleArchive(id);
    navigate("/");
  };

  if (!note) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container-base p-5">
      <div className="flex h-screen flex-col justify-center gap-5">
        <h2 className="text-4xl text-white">{note.title}</h2>
        <p className="text-white">{note.body}</p>
        <p className="text-white">{showFormattedDate(note.createdAt)}</p>
        <div className="flex gap-5">
          <button
            onClick={() => handleDelete(note.id)}
            className="w-full bg-transparent text-white hover:bg-red-400 border border-white rounded-lg px-6 py-5 cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={() => handleToggleArchive(note.id)}
            className="w-full bg-transparent text-white hover:bg-yellow-400 border border-white rounded-lg px-6 py-5 cursor-pointer"
          >
            {note.archived ? "Restore" : "Archive"}
          </button>
        </div>
        <Link to="/" className="text-white hover:underline">
          {`< Back to Notes`}
        </Link>
      </div>
    </section>
  );
};

NoteDetail.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  removeNote: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NoteDetail;
