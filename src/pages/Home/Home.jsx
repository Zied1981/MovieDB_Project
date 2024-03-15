import "./Home.css";
/* import movies from "../../components/movieDatabase/movieDatabase.jsx"; */
import movies from "../../components/movieDatabase/movieDatabase";
import { useEffect, useState } from "react";
import Stars from "../../components/Stars/Stars";
import Search from "../../components/Search/Search";
const Home = () => {
  const [data, setData] = useState(movies);
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
    setData([...data]);
  }, [sort]);

  /* const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);
  const [bestrate, setBestRate] = useState(false);
  const [az, setAz] = useState(false);
  const [za, setZa] = useState(false); */
  /* 
  useEffect(() => {
    data.sort((a, b) => {
      return a.year - b.year;
    });

    setData([...data]);
  }, [ascending]);

  useEffect(() => {
    data.sort((a, b) => {
      return b.year - a.year;
    });

    setData([...data]);
  }, [descending]);

  useEffect(() => {
    data.sort((a, b) => {
      return b.rate - a.rate;
    });
    setData([...data]);
  }, [bestrate]);
  useEffect(() => {
    data.sort((a, b) => {
      return ("" + a.title).localeCompare(b.title);
    });

    setData([...data]);
  }, [az]);

  useEffect(() => {
    data.sort((a, b) => {
      return ("" + b.title).localeCompare(a.title);
    });

    setData([...data]);
  }, [za]); */

  return (
    <main>
      <h1>MOVIE FOR YOU</h1>

      <Search />

      <div className="btn-container">
        <button onClick={() => setSort("btn1")}>Sort by Date Ascending</button>

        <button onClick={() => setSort("btn2")}>Sort by Date Descending</button>
        <button onClick={() => setSort("btn3")}>Best Rate</button>
        <button onClick={() => setSort("btn4")}>A-Z</button>
        <button onClick={() => setSort("btn5")}>Z-A</button>
      </div>

      {userInput.length > 0 ? (
        <Search />
      ) : (
        <section className="grid-box">
          {data.map((items, index) => (
            <article key={index} className="container">
              <h2>{items.title}</h2>
              <p>{items.year}</p>
              <p>{items.director}</p>
              <p>{items.duration}</p>
              <p>{items.rate}</p>
              <Stars rate={items.rate} />
              <div>
                {items.genre.map((element, index) => (
                  <div key={index}>
                    <p>{element}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default Home;
