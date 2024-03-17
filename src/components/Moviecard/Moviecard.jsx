import "./Moviecard.css";
import Stars from "../Stars/Stars";
const Moviecard = ({ content }) => {
  return (
    <section className="grid-box">
      {content.map((item, index) => (
        <div className="container" key={index}>
          <h2>{item.title}</h2>
          <p>{item.year}</p>
          <p>{item.director}</p>
          <p>{item.duration}</p>
          <p>{item.rate}</p>
          <Stars rate={item.rate} />

          {item.genre.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Moviecard;
