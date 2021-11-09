import React from "react";

// API
import API from '../API';
// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// component

// Hook
import {useHomeFetch, initialState} from "../hooks/useHomeFetch";
// Image
import NoImage from '../images/no_image.jpg'
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Button from "./Button";

const Home = () => {

   const {state, loading, error, SearchTerm, setSearchTerm, setPage, setIsLoadingMore} = useHomeFetch();
    console.log(state)

    if (error) return <div>Something went wrong ...</div>
    return (
        <>
            {!SearchTerm && state.results[0]  ?
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
                />
                : null}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={SearchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie =>
                    <Thumb
                    key={movie.id}
                    clickable
                    image={movie.poster_path
                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                    : NoImage}
                    movieId={movie.id}/>
                    )}
            </Grid>
            {loading && <Spinner/>}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={ () => {setIsLoadingMore(true)}}/>
            )}
        </>

    )
}




export default Home;


