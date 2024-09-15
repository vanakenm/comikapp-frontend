import { NavLink } from "react-router-dom";

export default function Navigation({ user, setUser }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mycomics">My Comics</NavLink>
        </li>
        <li>
          <NavLink to="/addcomics">Register comics</NavLink>
        </li>
      </ul>
    </div>
  );
}
