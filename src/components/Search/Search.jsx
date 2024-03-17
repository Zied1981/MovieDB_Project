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
        {filteredmovie.length > 0 ? (
          // filterredmovie Var von search component an die moviecard übergeben da alles drin gerendert wird
          <div>
            <Moviecard content={filteredmovie} />
          </div>
        ) : (
          <p className="error">Movie Not Found</p>
        )}
      </article>
      {/*     {filteredmovie.length > 0 ? <Moviecard /> : "not found"}; */}
    </section>
  );
};

export default Search;
