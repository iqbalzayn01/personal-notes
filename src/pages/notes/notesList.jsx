import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NotesList = ({ notes, removeNote, toggleArchive, showFormattedDate }) => {
  return (
    <ul className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <li key={note.id} className="note-item gap-5">
            <article className="flex flex-col gap-2">
              <Link to={`/note/${note.id}`}>
                <h2 className="font-bold text-2xl hover:underline">
                  {note.title}
                </h2>
              </Link>
              <p className="text-gray-400 pb-5">
                {showFormattedDate(note.createdAt)}
              </p>
              <p
                className="overflow-hidden text-ellipsis"
                style={{
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  display: "-webkit-box",
                }}
              >
                {note.body}
              </p>
            </article>
            <div className="flex gap-5">
              <button
                onClick={() => removeNote(note.id)}
                className="w-full bg-transparent hover:bg-red-400 border border-white rounded-lg px-6 py-5 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => toggleArchive(note.id)}
                className="w-full bg-transparent hover:bg-yellow-400 border border-white rounded-lg px-6 py-5 cursor-pointer"
              >
                {note.archived ? "Restore" : "Archive"}
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="text-white">No notes found.</li>
      )}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};

export default NotesList;
