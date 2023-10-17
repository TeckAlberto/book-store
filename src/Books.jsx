import { useLocation } from "react-router-dom";
import Book from "./Book.jsx";
import useApplication from "./hooks/useApplication.jsx";

export default  function Books() {
    const books = [
        {
            title: "El principito",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Harry Potter",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Los juegos del hambre",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Davidd goggins biografia",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "50 sombres de grey",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "El señor de los anillos",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        }
    ];

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