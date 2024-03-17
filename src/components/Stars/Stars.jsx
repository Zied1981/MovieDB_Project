import "./Stars.css";
const Stars = (props) => {
  let rating = [];
  for (let i = 0; i <= 9; i++) {
    if (props.rate > i && props.rate - i >= 1) {
      rating.push("full.svg");
    } else if (props.rate - i >= 0.5) {
      rating.push("half.svg");
    } else {
      rating.push("empty.svg");
    }
  }

  return (
    <div className="star-container">
      {rating.map((stars, index) => (
        <img src={`./public/${stars}`} key={index} alt="stars" />
      ))}
    </div>
  );
};

export default Stars;
