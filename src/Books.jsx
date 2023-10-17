import { useLocation } from "react-router-dom";
import Book from "./Book.jsx";
import useApplication from "./hooks/useApplication.jsx";

export default  function Books() {

    const { books } = useApplication()
    const location = useLocation()
    console.log(location)
    //console.log(books.length)

    return (
        <div className={"flex flex-wrap w-4/5 justify-between gap-3"}>
            {books.length > 0 ?
                books.map( (book, index) => (
                    <Book
                        book={book}
                        key={index}
                    />
                )) : (
                    <p>No hay libros</p>
                )}

        </div>
    )
}