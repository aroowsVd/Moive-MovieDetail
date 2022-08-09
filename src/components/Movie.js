import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, image, title, summary, genres }) {
  return (
    <div>
      <img src={image} alt="" />
      <h2><Link to={`movie/${id}`}>{title}</Link></h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, index)=> (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;