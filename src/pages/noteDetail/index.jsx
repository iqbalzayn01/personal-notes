import PropTypes from "prop-types";
import parser from "html-react-parser";
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
    return <div>No notes found.</div>;
  }

  const parseNoteBody = (body) => {
    const paragraphs = body.split(/\n+/).map((paragraph, index) => {
      return `<p key=${index}>${paragraph}</p>`;
    });

    return paragraphs.join("");
  };

  return (
    <section className="container-base max-w-[900px] p-5">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-4xl text-white">{note.title}</h2>
        <p className="text-gray-400">{showFormattedDate(note.createdAt)}</p>
        <div className="flex flex-col gap-2 text-white">
          {parser(parseNoteBody(note.body))}
        </div>
        <Link to="/" className="text-white hover:underline">
          {`< Back to Notes`}
        </Link>
      </div>
      <div className="fixed right-6 bottom-6 flex items-center gap-5">
        <button
          type="button"
          onClick={() => handleDelete(note.id)}
          className="hover:bg-red-400 text-4xl bg-white rounded-full p-3 cursor-pointer"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.1667 87.5C26.8751 87.5 24.914 86.6847 23.2834 85.0542C21.6529 83.4236 20.8362 81.4611 20.8334 79.1667V25H16.6667V16.6667H37.5001V12.5H62.5001V16.6667H83.3334V25H79.1667V79.1667C79.1667 81.4583 78.3515 83.4208 76.7209 85.0542C75.0904 86.6875 73.1279 87.5028 70.8334 87.5H29.1667ZM37.5001 70.8333H45.8334V33.3333H37.5001V70.8333ZM54.1667 70.8333H62.5001V33.3333H54.1667V70.8333Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleToggleArchive(note.id)}
          className="hover:bg-yellow-400 text-4xl bg-white rounded-full p-3 cursor-pointer"
        >
          {note.archived === false && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 75L66.6667 58.3334L60.8333 52.5L54.1667 59.1667V41.6667H45.8333V59.1667L39.1667 52.5L33.3333 58.3334L50 75ZM20.8333 87.5C18.5417 87.5 16.5806 86.6847 14.95 85.0542C13.3194 83.4236 12.5028 81.4611 12.5 79.1667V27.1875C12.5 26.2153 12.6569 25.2778 12.9708 24.375C13.2847 23.4722 13.7528 22.6389 14.375 21.875L19.5833 15.5209C20.3472 14.5486 21.3014 13.8014 22.4458 13.2792C23.5903 12.757 24.7889 12.4972 26.0417 12.5H73.9583C75.2083 12.5 76.4069 12.7611 77.5542 13.2834C78.7014 13.8056 79.6555 14.5514 80.4167 15.5209L85.625 21.875C86.25 22.6389 86.7194 23.4722 87.0333 24.375C87.3472 25.2778 87.5028 26.2153 87.5 27.1875V79.1667C87.5 81.4584 86.6847 83.4209 85.0542 85.0542C83.4236 86.6875 81.4611 87.5028 79.1667 87.5H20.8333ZM22.5 25H77.5L73.9583 20.8334H26.0417L22.5 25Z"
                fill="black"
              />
            </svg>
          )}
          {note.archived === true && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.1666 12.5C44.221 12.5 34.6827 16.4509 27.6501 23.4835C20.6175 30.5161 16.6666 40.0544 16.6666 50H4.16663L20.375 66.2083L20.6666 66.7917L37.5 50H25C25 33.875 38.0416 20.8333 54.1666 20.8333C70.2916 20.8333 83.3333 33.875 83.3333 50C83.3333 66.125 70.2916 79.1667 54.1666 79.1667C46.125 79.1667 38.8333 75.875 33.5833 70.5833L27.6666 76.5C31.1392 79.9917 35.2687 82.7614 39.8169 84.6494C44.3651 86.5373 49.2421 87.5061 54.1666 87.5C64.1122 87.5 73.6505 83.5491 80.6831 76.5165C87.7157 69.4839 91.6666 59.9456 91.6666 50C91.6666 40.0544 87.7157 30.5161 80.6831 23.4835C73.6505 16.4509 64.1122 12.5 54.1666 12.5ZM50 33.3333V54.1667L67.8333 64.75L70.8333 59.7083L56.25 51.0417V33.3333H50Z"
                fill="black"
              />
            </svg>
          )}
        </button>
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
