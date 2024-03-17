import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";
import movies from "../../components/movieDatabase/movieDatabase";

const Detail = () => {
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const find = movies.find((item) => item.title === id);
    setFilterData(find);
  }, [movies]);

  return (
    <section className="detail-sec">
      <h2>Detailpage</h2>
      <div className="detail-container">
        <p>Title:{filterData.title}</p>
        <p>Director:{filterData.director}</p>
        <p>Duration:{filterData.duration}</p>
        <p>Year:{filterData.year}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In pariatur
          aliquid nam vero velit hic facere quo quod animi sint corrupti
          reiciendis, amet optio, aut quibusdam, deleniti accusamus? Quos
          dolorem temporibus labore facere eligendi, distinctio accusamus magnam
          tenetur quisquam debitis natus eveniet nemo illo fugiat reiciendis
          recusandae obcaecati, id molestiae praesentium cumque eaque ipsam
          similique consequuntur laudantium. Officia accusamus, et corporis non
          alias minima esse hic dolorem quas saepe, consectetur perferendis sint
          quaerat totam ratione unde doloribus ullam fugiat mollitia excepturi
          ducimus facere quia! Nihil eveniet totam quaerat vero unde porro
          fugiat suscipit harum maiores, quod consequuntur. Quam, tenetur
          voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quos praesentium distinctio cum aperiam voluptates quibusdam quasi?
          Voluptates consequuntur sit omnis iure, dicta hic veritatis quae
          repellendus placeat, nisi sint perspiciatis eveniet nesciunt libero
          reprehenderit ratione corporis id aspernatur quo aut debitis error
          blanditiis facere. Voluptatem quidem harum fuga totam in neque
        </p>
      </div>
    </section>
  );
};

export default Detail;
