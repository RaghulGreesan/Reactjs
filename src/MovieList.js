import { useState } from "react";
import { Movies } from "./Movies";
import { AddMovie } from "./AddMovie";


// export function MovieList({movies, setMovies}) {
 

  
//   return (
//     <section>
      

//       <div className="movie-list">
//         {movies.map((mv, index) => (
//           <Movies
//             key={index}
//             name={mv.name}
//             poster={mv.poster}
//             rating={mv.rating}
//             summary={mv.summary}
//             id={index}
//             setMovies={setMovies}
//             movies={movies}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
export function MovieList({movies, setMovies}) {
  const history = useHistory();
 

  
  return (
    <section>
      

      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movies
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={index}
           DeleteMovieButton={ 
           <IconButton
            className ="movie-show-button"
            onClick={()=> {
              console.log(index, movies);
              const remainingMovies = movies.filter((mv, idx)=> idx !== index );
              console.log(remainingMovies);
              setMovies(remainingMovies);
            }}
            color="error"
            aria-label="Delete movie" >
              <DeleteIcon />
            </IconButton>
           }

EditMovieButton={ 
  <IconButton
  style={{ marginLeft: "auto"}}
   className ="movie-show-button"
   onClick={()=> history.push("/movies/edit/" + index ) }
   color="secondary"
   aria-label="Edit movie" >
     <EditIcon />
   </IconButton>
          }
          />
        ))}
      </div>
    </section>
  );
}
