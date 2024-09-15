import { useEffect, useState } from "react";
import Api from "./Api.js";
import { NavLink } from "react-router-dom";

function ComicItem({ comic }) {
  return (
    <li className="comic-item">
      <span className="comic-title">{comic.title}</span>
      <span>
        {comic.series} - {comic.publisher}
      </span>
    </li>
  );
}

export default function MyComicsPage() {
  const [myComics, setMyComics] = useState([]);
  useEffect(() => {
    Api.getMyComicsList().then((data) => setMyComics(data));
  }, []);
  return (
    <div className="main">
      <h1 className="title">My comics</h1>
      <ul className="comic-list">
        {myComics.map((c) => (
          <ComicItem comic={c} />
        ))}
      </ul>
      <NavLink to="/addcomic" className="button">
        Add comic
      </NavLink>
    </div>
  );
}
