import { useState } from "react";
import Api from "./Api.js";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";

export default function NewComicsPage() {
  const [user, setUser] = useOutletContext();
  const [title, setTitle] = useState("");
  const [series, setSeries] = useState("");
  const [publisher, setPublisher] = useState("Marvel");

  let navigate = useNavigate();

  async function uploadComic(e) {
    e.preventDefault();
    // Add your code here
    console.log("Uploading comic...");
    console.log(series);
    console.log(title);
    console.log(publisher);
    let result = await Api.addComic({ title, series, publisher });
    navigate("/mycomics");
  }
  return (
    <div className="main">
      <h1 className="title">New comic for {user.name}:</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          onChange={(e) => setSeries(e.target.value)}
          placeholder="Series"
          value={series}
        />
        <select onChange={(e) => setPublisher(e.target.value)}>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>
        <button type="submit" onClick={(e) => uploadComic(e)}>
          Add comic
        </button>
      </form>
    </div>
  );
}
