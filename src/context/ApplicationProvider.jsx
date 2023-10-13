import { createContext, useState, useEffect } from "react";


const ApplicationContext = createContext()


const ApplicationProvider = () => {
    const [ movies, setMovies ] = useState()
    const [ categorie, setCategorie ] = useState()

    useEffect(() => {

    }, [categorie])


}

