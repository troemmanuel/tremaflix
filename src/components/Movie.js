import React from "react";
import {useParams} from "react-router-dom";

// Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// Hooks
import {useMovieFetch} from "../hooks/useMovieFetch";
import BreadCrumb from "./BreadCrumb";
//Image
import NoImage from '../images/no_image.jpg'


const Movie = () => {

    const {movieId} = useParams()
    const { state: movie, loading, error } = useMovieFetch(movieId)
    if(movie.actors){
        movie.actors.map(el => console.log(el))
    }

    // console.log('actors :', movie.actors)


    if(loading) return <Spinner/>
    if(error) return <div>Something went wrong ...</div>
   return(
       <>
          <BreadCrumb movieTitle={movie.original_title}/>
           <MovieInfo movie={movie}/>
           <MovieInfoBar time={movie.runtime}
                          budget={movie.budget}
                         revenue={movie.revenue}
           />
           { movie.actors &&
           <Grid header='Actors'>
               {movie.actors.map(actor => (
                   <Actor key={actor.credit_id}
                          name={actor.name}
                          charater={actor.character}
                          imageUrl={
                              actor.profile_path
                                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                  : NoImage
                          }
                   />
               ))}
           </Grid>}
       </>
   )
}

export default Movie;
