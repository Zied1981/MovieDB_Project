import "./Home.css";
import movies from "../../components/movieDatabase/movieDatabase.jsx";
import { useState } from "react";
const Home = () => {
  const [singleMovie, setSingleMovie] = useState();

  return (
    <main>
      <div className="btn-container">
        <button>Sort by Date Ascending</button>
        <button>Sort by Date Descending</button>
        <button>Best Rate</button>
        <button>A-Z</button>
        <button>Z-A</button>
      </div>
      <section className="grid-box">
        {movies.map((items, index) => (
          <article key={index} className="container">
            <h2>{items.title}</h2>
            <p>{items.year}</p>
            <p>{items.director}</p>
            <p>{items.duration}</p>
            <p>{items.rate}</p>
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
    </main>
  );
};

export default Home;
