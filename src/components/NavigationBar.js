import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">job-search</Link>
          </li>
          <li>
            <Link to="/job-offer">job-offer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
