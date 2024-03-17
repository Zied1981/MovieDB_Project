import "./Home.css";
/* import movies from "../../components/movieDatabase/movieDatabase.jsx"; */
import movies from "../../components/movieDatabase/movieDatabase";
import { useEffect, useState } from "react";

import Search from "../../components/Search/Search";
import Moviecard from "../../components/Moviecard/Moviecard";
const Home = () => {
  //usestate für unsere moviesArray den wir in data speichern.
  const [data, setData] = useState(movies);
  //usestate für unsere sortier func.
  const [sort, setSort] = useState("");

  useEffect(() => {
    data.sort((a, b) => {
      if (sort === "btn1") {
        return a.year - b.year;
      } else if (sort === "btn2") {
        return b.year - a.year;
      } else if (sort === "btn3") {
        return b.rate - a.rate;
      } else if (sort === "btn4") {
        return ("" + a.title).localeCompare(b.title);
      } else {
        return ("" + b.title).localeCompare(a.title);
      }
    });
    //spread-operator:gibt das selbe array in einer neunen Reihenfolge
    //zurück und löst hier ein neunen rendering aus.!!!!
    setData([...data]);
  }, [sort]);

  return (
    <main>
      <h1>MOVIE FOR YOU</h1>

      <Search zied={data} />

      <div className="btn-container">
        <button onClick={() => setSort("btn1")}>Sort by Date Ascending</button>

        <button onClick={() => setSort("btn2")}>Sort by Date Descending</button>
        <button onClick={() => setSort("btn3")}>Best Rate</button>
        <button onClick={() => setSort("btn4")}>A-Z</button>
        <button onClick={() => setSort("btn5")}>Z-A</button>
      </div>
      <div>
        <Moviecard content={data} />
      </div>
    </main>
  );
};

export default Home;
