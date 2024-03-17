import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";
import movies from "../../components/movieDatabase/movieDatabase";
const Detail = () => {
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const find = movies.find((item) => item.id === id);
    setFilterData(find);
  }, [movies]);

  return (
    <section className="detail-sec">
      <h2>Detailpage</h2>
      <div>
        <p>Title:{filterData.title}</p>
        <p>Director:{filterData.director}</p>
        <p>Duration:{filterData.duration}</p>
        <p>Year:{filterData.year}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          distinctio explicabo minus culpa eligendi dolorem itaque saepe
          officiis ad voluptates hic, excepturi perferendis id porro molestias
          eius eum blanditiis nihil!
        </p>
      </div>
    </section>
  );
};

export default Detail;
