import { Link } from "react-router-dom";

export default function() {

    return (
        <div>
        <ul>
          <Link to="/name-form">
            <li>
              name-form
            </li>
          </Link>
          <Link to="/users">
            <li>
              table
            </li>
          </Link>
        </ul>
      </div>
    );
} 