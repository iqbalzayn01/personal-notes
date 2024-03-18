import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex justify-end gap-10">
      <li>
        <Link to="/" className="text-white hover:underline">
          Notes
        </Link>
      </li>
      <li>
        <Link to="/archived" className="text-white hover:underline">
          Archived
        </Link>
      </li>
    </ul>
  );
}
