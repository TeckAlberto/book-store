import Book from "./Book.jsx";

export default  function Books() {
    const books = [
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        },
        {
            title: "Mi Libro",
            author: "Autor del Libro",
            category: "Ficción",
            pages: 250,
            summary: "Resumen del libro...",
            image: "../public/img/img.png",
        }
    ];

    return (
        <div className={"grid grid-flow-row-dense gap-3 grid-cols-4 grid-rows-2 col-start-3 col-span-full row-start-2 row-span-full pr-3"}>
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