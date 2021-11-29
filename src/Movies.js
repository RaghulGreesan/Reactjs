import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import { Counter } from './Counter';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

export function Movies({ name,
   poster,
    rating, 
    summary, 
    id, 
    DeleteMovieButton,
    EditMovieButton
  })
   {
  const [show, setShow] = useState(true);
  const history = useHistory();

  return (
    <Card>

      <div className="movie-container">
        <img className="movie-poster" src={poster} alt={name} />
        <CardContent>
          <div className="movie-rate">
            <h3> {name}
            <IconButton 
            onClick={() => history.push("/movies/" + id)}
            color="primary"
            aria-label="MovieDetails" >
            <InfoIcon />
              </IconButton>


              <IconButton className="movie-show-button"
                onClick={() => setShow(!show)}
                color="primary"
                aria-label={show ? "Hide Description" : "Show Description"}>

                {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </h3>
            <p className="movie-rating">⭐{rating} </p>
          </div>

          {/* <button  onClick ={() => setShow(!show)}  className="movie-hide-show">
            { show ? "Hide Description" : "Show Description"}
             </button> */}

          {show ? <p> {summary} </p> : ""}

        </CardContent>
        <CardActions>
          <Counter />
          { EditMovieButton }
        { DeleteMovieButton }

        </CardActions>
      </div>
    </Card>
  );

}
