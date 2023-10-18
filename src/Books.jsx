import Book from "./Book.jsx";
import useApplication from "./hooks/useApplication.jsx";

export default  function Books() {
    const { books } = useApplication()

    return (
        <div className={"flex flex-wrap w-4/5 px-10 gap-5"}>
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