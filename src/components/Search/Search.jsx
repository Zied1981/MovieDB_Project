import { useState } from "react";
import "./Search.css";
import Moviecard from "../Moviecard/Moviecard";

const Search = ({ zied }) => {
  const [userInput, setUserInput] = useState();
  const [filteredmovie, setFilteredmovie] = useState([]);

  const searchAllMovies = (event) => {
    const inputVal = event.target.value;
    setUserInput(inputVal);

    const filteredmovie = zied.filter((items) =>
      items.title.toLowerCase().includes(inputVal.toLowerCase())
    );
    setFilteredmovie(filteredmovie);
  };
  console.log(filteredmovie);

  return (
    <section className="suchfeld">
      <input
        type="text"
        placeholder="Search Movie"
        /*   onChange={(e) => setUserInput(e.target.value)} */
        /*  value={userInput} */
        onChange={searchAllMovies}
      />
      <article>
        {userInput > 0 ? (
          <div>
            <Moviecard content={filteredmovie} />

            {/*  {zied.map((film, index) =>
              film.title.toLowerCase().includes(userInput.toLowerCase()) ? (
                <div key={index}>
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
                </div>
              ) : (
                ""
              )

            )} */}
          </div>
        ) : (
          "Not found "
        )}
      </article>
      {/*     {filteredmovie > 0 ? <Moviecard /> : "not found"}; */}
    </section>
  );
};

export default Search;
