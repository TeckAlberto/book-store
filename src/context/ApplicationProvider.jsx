import { createContext, useState, useEffect } from "react";
import { initialBooks } from "../data/books";

const ApplicationContext = createContext()


const ApplicationProvider = ({children}) => {

    
    const [ books, setBooks ] = useState(initialBooks)
    const [ category, setCategory ] = useState('')
    //const [ currentOrder, setCurrentOrder ] = useState([])
    //const [ orders, setOrders ] = useState([])

    const handleCurrentCategory = currentCategory => {
        setCategory(currentCategory)
    }

    const refreshBooks = (currentCategory) => {
        
        if (currentCategory === '') {
          // If the category is null, show all books.
          setBooks(initialBooks);
        } else {
          // Filter books based on the selected category.
          const updatedBooks = initialBooks.filter((book) => book.category === currentCategory);
          setBooks(updatedBooks);
        }
      };

    useEffect(() => {
        refreshBooks(category)

    }, [category])

    return (
        <ApplicationContext.Provider 
            value={{
                books,
                setBooks,
                category,
                setCategory,
                handleCurrentCategory
            }}
        >
            {children}
        </ApplicationContext.Provider>
    )

}

export {
    ApplicationContext,
    ApplicationProvider
}
