import Book from "./Book"
import { getRecommendedBooks } from "./data/books"

export default function Dashboard() {
    const recommendedBooks = getRecommendedBooks()
    
    
    return (
        <main className="flex flex-col">
            <h1 className="mx-auto mb-10 text-4xl font-semibold text-indigo-600">Libros Recomendados Para Ti</h1>

            <section className="flex flex-wrap justify-around gap-5 px-10">

            {recommendedBooks.map(book => (
                <Book
                    key={book.key}
                    book={book}
                />
            ))

            }

            </section>


        </main>
    )
}
