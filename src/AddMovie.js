import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({movies, setMovies}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const setMovieName = (event) => setName(event.target.value);
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
    setTrailer("");
  };

  const  addMovie = () => {
    console.log ({name, poster, rating, summary, trailer});


    const newMovie = { name, poster, rating, summary, trailer };
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={setMovieName}
        label="Name"
        variant="outlined" />

      <TextField
        value={poster}
        label="Poster url"
        onChange={(event) => setPoster(event.target.value)}
        variant="outlined" />
      <TextField
        value={rating}
        label="Rating"
        onChange={(event) => setRating(event.target.value)}
        variant="outlined" />
      <TextField
        value={summary}
        label="Summary"
        onChange={(event) => setSummary(event.target.value)} 
        variant="outlined" />

<TextField
        value={trailer}
        label="Trailer"
        onChange={(event) => setTrailer(event.target.value)} 
        variant="outlined" />
        

        
      <Button onClick={addMovie} variant="contained">
        Add Movie
      </Button>
    </div>
  );
}
