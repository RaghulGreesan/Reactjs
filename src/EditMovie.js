import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function EditMovie({ movies, setMovies }) { 
  const { id } =useParams(); 
  const history = useHistory();   
  const movie = movies[id];
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const setMovieName = (event) => setName(event.target.value);
  

  const  editMovie = () => {
    console.log ({name, poster, rating, summary, trailer});


    const updateMovie = { name, poster, rating, summary, trailer };

    const copyMovies = [...movies];
    copyMovies[id] = updateMovie;

    setMovies(copyMovies);
    history.push("/movies")
    
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
        

        
      <Button onClick={editMovie} variant="contained" color="success">
        Save
      </Button>
    </div>
  );
}
