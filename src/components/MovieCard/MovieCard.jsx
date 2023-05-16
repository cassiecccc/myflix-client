import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export function MovieCard({ movie, onMovieClick }) {
  return (
    <Card
      className="h-100"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};