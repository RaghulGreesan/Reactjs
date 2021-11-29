//import logo from './logo.svg';
import './App.css';
import { MovieList } from './MovieList';
import { ColorList } from './ColorList';
import { Link, Switch,  Route, Redirect, useParams, useHistory } from "react-router-dom";
import {AddMovie} from './AddMovie';
import {EditMovie} from './EditMovie';
import {useState} from "react"
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {

  const INITIAL_MOVIES = [
    {
      id: "100",
      name: "Paruthiveeran",
      poster: "https://wallpapercave.com/wp/wp6653697.jpg",
      rating: 8.2,
      summary: `A young, carefree man, Paruthiveeran, saves Muththazhagu's life and they eventually fall in love. 
                  However, their families object to their union, forcing the couple to elope together.`,
       trailer:"https://www.youtube.com/embed/JdRf57vBEzM"           

    },
    {
      id: "101",
      name: "O Kadhal Kanmani",
      poster: "https://wallpaperaccess.com/full/4343742.jpg",
      rating: 7.4,
      summary: `Two youngsters Adi and Tara are attracted to each other when they meet at a wedding. Since they do not believe in marriage, 
      they decide to live together. What follows forms the crux of the story.`,
      trailer: "https://www.youtube.com/embed/2mBG4vlhcCc"
    },
    {
      id: "102",
      name: "Karnan",
      poster: "https://www.filmibeat.com/ph-big/2021/04/karnan-movie-posters_16179793174.jpg",
      rating: 8.2,
      summary: `A small village in Tamil Nadu is inhabited by people belonging to a lower caste. 
                Karnan, a young man, is revolted by the inhuman treatment given to his villagers and 
                fights for their rights. `,
       trailer: "https://www.youtube.com/embed/pgfUzQ8nzBY"
    },
    {
      id: "103",
      name: "Madras",
      poster:
        "http://1.bp.blogspot.com/-r5loPw7W1c4/VCr-paAmmpI/AAAAAAAAB2k/pE7ndkU2p5Y/s1600/madras-movie-super-hit-songs-poster.jpg",
      rating: 8,
      summary: `A wall creates discord between two factions of a political party. Kaali and his friend Anbu, 
                 who is a political aspirant, get embroiled in the brutal political rivalry. `,
      trailer: "https://www.youtube.com/embed/TZE8iayS_Xk"
    },
    {
      id: "104",
      name: "Attakathi",
      poster:
        "https://pro2-bar-s3-cdn-cf6.myportfolio.com/9fd5290e2109e08ffd62f3f8f39a7073/7c6b0149172682e89c295881_rw_1200.jpg?h=99403acb4b4c39a6af8500487371adda",
      rating: 7.2,
      summary: `Dinakaran, a college student who becomes the leader of a gang, is unlucky in love. Soon,
                  he tries to find true romance in Poornima, a woman who rejected him once before.`,
       trailer: "https://www.youtube.com/embed/ahmdb6yKfaU"          
    },
    {
      id: "105",
      name: "SarpattaParambarai",
      poster: "https://wallpapercave.com/wp/wp9555121.jpg",
      rating: 8.7,
      summary:` A young man lives in the segregated Madras of the 1970s. When he is presented with 
                the opportunity to revive his boxing career and his clan, 
                 he decides to take it but faces challenges in his path.`,
      trailer: "https://www.youtube.com/embed/XTTAHt4VlUA"
    },
  ];

  const  [mode, setMode] = useState("light")
  
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const history = useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <Paper style = {{ minHeight: "100vh"}} elevation={4}>
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
       <Toolbar>
       <Button startIcon={ <HomeIcon/> } onClick={()=> history.push("/")} color ="inherit"> Home </Button>
       <Button startIcon={ <LocalMoviesIcon/> } onClick={()=> history.push("/movies")} color ="inherit"> Movies </Button>
       <Button startIcon={ <AddIcon/> } onClick={()=> history.push("/movies/add")} color ="inherit"> AddMovies </Button>
       <Button startIcon={<PaletteIcon/> } onClick={()=> history.push("/color-game")} color ="inherit"> Color Game </Button>
       <Button startIcon = { mode === "light" ? <Brightness4Icon/> : <Brightness7Icon/> }
       onClick={()=> setMode( mode === "light" ? "dark" : "light") }
        style = {{ marginLeft: "auto"}} 
        color="inherit">
         {mode === "light" ? "dark" : "light"} mode 
       </Button>
       </Toolbar>
      </AppBar>
      </Box>  



<Switch>
<Route exact path ="/">
  <Welcome />
  {/* <MovieDetails /> */}
</Route>

<Route path="/films">
  <Redirect to="/movies" />
</Route>

<Route path="/movies/add">
< AddMovie movies={movies} setMovies={setMovies} />
</Route>

<Route path="/movies/edit/:id">
{/* <MovieDetails movies={movies} /> */}
< EditMovie movies={movies} setMovies={setMovies} />
</Route>

<Route path="/movies/:id">
<MovieDetails movies={movies} />
</Route>

<Route path="/movies">
<MovieList movies={movies} setMovies={setMovies} />
</Route>

<Route path ="/color-game">
<ColorList /> 
</Route>
<Route path="**">
  <NotFound />
  </Route>
     </Switch>
</div>
</Paper>
</ThemeProvider>
  
   );
 }
 function MovieDetails({movies}){
   const {id} = useParams();
   const movie = movies[id];
   const history = useHistory();
   return(
     <div>
       {/* <h1> Movie id is {id} </h1> */}
       <iframe
        width="100%"
         height="570" 
         src={movie.trailer} 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen>
         </iframe>
         <div className ="movie-details-container"> 
         <div className="movie-rate">
           <h3 className="movie-name">{movie.name} </h3>
            <p className="movie-rating">⭐ {movie.rating}</p>
          </div>
         <p> {movie.summary}</p>
         <Button variant="contained"
          onClick= {()=> history.goBack()}
          startIcon={<ArrowBackIosIcon />}>
            BACK
            </Button>
         </div>

     </div>
   )
 }




 function NotFound(){
   return(
    <div>
      <h1 className="not-found"></h1>
     <img 
     src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
     alt="404 NotFound" />
     </div>
   )
   
 }

function Welcome() {
  return <h1> Welcome All 🥰!!!🥰</h1>
}

export default App;
