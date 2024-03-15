import { useState } from "react";
import "./Search.css";
const Search = (props) => {
  const [userInput, setUserInput] = useState();

  return (
    <section className="suchfeld">
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <article>
        {userInput > 0 ? (
          <div>
            {data.map((film, index) =>
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
            )}
          </div>
        ) : (
          "kein film gefunden "
        )}
      </article>
    </section>
  );
};

export default Search;
