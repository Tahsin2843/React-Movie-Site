import { useState, useEffect, createContext, useContext, Children } from "react";

let MovieContext = createContext()

export let useMovieContext = () => useContext(MovieContext)

export let MovieProvider = ({children}) =>{
    let [favorites, setFavorites] = useState([])

    useEffect(()=>{
        let storedFavs = localStorage.getItem('favorites')
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(()=>{
        localStorage.setItem( 'favorites', JSON.stringify(favorites))
    }, [favorites])

    let addToFavs = (movie) =>{
        setFavorites(prev => [...prev, movie])
    }

    let removeFromFavs = (movieId) =>{
        setFavorites(prev => prev.filter(movie=> movie.id !== movieId) )
    }

    let isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id == movieId)
    }

    let value = {
        favorites, 
        addToFavs, 
        removeFromFavs, 
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}