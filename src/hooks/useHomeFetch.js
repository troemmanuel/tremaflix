import API from "../API";
import {useEffect, useState, useRef } from "react";

export const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [SearchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const  [page, setPage] = useState(1)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    console.log(page)

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        }catch (error){
            setError(true)
        }
        // finally
        setLoading(false);
    };
    // Initial and search
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, SearchTerm);
    }, [SearchTerm])

    // Loading more
    useEffect(() => {
        if(!isLoadingMore) return;
        fetchMovies(state.page + 1, SearchTerm)
        setIsLoadingMore(false)
    }, [isLoadingMore, SearchTerm, state.page])

    //fetchMovies(1);
    //console.log(state)
    return {state, loading, error, SearchTerm, setSearchTerm, setPage, setIsLoadingMore}
}
