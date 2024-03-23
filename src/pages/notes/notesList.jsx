import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { showFormattedDate } from "../../utils";

const NotesList = ({ notes, isLoading }) => {
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <ul className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <li key={note.id} className="note-item gap-5">
            <article className="flex flex-col gap-2">
              <Link to={`/notes/${note.id}`}>
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
          </li>
        ))
      ) : (
        <li className="text-white">No notes found.</li>
      )}
    </ul>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default NotesList;
