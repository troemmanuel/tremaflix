import {useState, useEffect, useCallback} from "react";
import API from "../API";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const fetchMovie =async () => {
        try{
            setLoading(true);
            setLoading(false);

            const movie = await API.fetchMovie(movieId);
            const credits = await API.fetchCredits(movieId);
            // Get directors only
            const directors = credits.crew.filter(
                member => member.job === 'Director'
            );

            setState ({
                ...movie,
                actors: credits.cast,
                directors: directors,
            })
            setLoading(false)
        } catch {
            setError(true)
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [movieId])

    return {state, loading, error}
}
