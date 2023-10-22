import { createContext, useState, useEffect } from "react";
import { getCategories, initialBooks } from "../data/books";
//import { initialUsers } from "../data/users";

const ApplicationContext = createContext()


const ApplicationProvider = ({children}) => {

    //const [ users, setUsers ] = useState(initialUsers)
    const [ books, setBooks ] = useState(initialBooks)
    const [ category, setCategory ] = useState('')
    const [ param, setParam ] = useState('')
    const [ pages, setPages ] = useState(0)
    const [ currentOrder, setCurrentOrder ] = useState([])
    const [ categories, setCategories ] = useState(getCategories())
    const [ isLogged, setIsLogged ] = useState(false)

    //console.log(categories)
    const [ orders, setOrders ] = useState([])

    const handleCurrentCategory = currentCategory => {
        setCategory(currentCategory)
    }

    const handleAddBook = book => {

        if(currentOrder.some( orderState => book.id === orderState.id)) {
            const updatedOrder = currentOrder.map(currentBook => {
                if (currentBook.id === book.id) {
                  return { ...currentBook, count: currentBook.count + 1 };
                }
                return currentBook;
              });
          
              setCurrentOrder(updatedOrder);
        } else {
            const count = 1
            setCurrentOrder([...currentOrder, {...book, count}])
        }
    }

    const handleSubstractBook = book => {

        if(book.count > 1) {
            const updatedOrder = currentOrder.map(currentBook => {
                if (currentBook.id === book.id) {
                  return { ...currentBook, count: currentBook.count -1 };
                }
                return currentBook;
              });
          
              setCurrentOrder(updatedOrder);
        } else {
            const updatedOrder = currentOrder.filter(currentBook => currentBook.id !== book.id);
          
            setCurrentOrder(updatedOrder);
        }
    }

    const handleDeleteBook = book => {
        const updatedOrder = currentOrder.filter(currentBook => currentBook.id !== book.id);
          
        setCurrentOrder(updatedOrder);
    }

    const handleGetOrder = () => {

        return 0
    }

    const refreshBooks = () => {
        // Filtrar libros iniciales si no se aplican filtros
        if (category === '' && param === '' && pages === 0) {
           
            setBooks(initialBooks);
            return;
        }
    
        // Aplicar filtros
        let updatedBooks = initialBooks.filter((book) => {
            const matchesCategory = category === '' || book.category === category;
            const matchesPages = pages === 0 || book.pages > pages;
            const matchesParam = param === '' || book.title.toLowerCase().includes(param.toLowerCase());
    
            return matchesCategory && matchesPages && matchesParam;
        });
    
        console.log("Libros actualizados:", updatedBooks);
        setBooks(updatedBooks);
    };
    
    
    useEffect(() => {
        refreshBooks();
        
    }, [category, param, pages]);
      
      

    return (
        <ApplicationContext.Provider 
            value={{
                books,
                setBooks,
                category,
                setCategory,
                param,
                setParam,
                pages,
                setPages,
                handleCurrentCategory,
                currentOrder,
                setCurrentOrder,
                categories,
                setCategories,
                handleAddBook,
                handleSubstractBook,
                isLogged,
                setIsLogged,
                handleGetOrder,
                handleDeleteBook,
                orders,
                setOrders
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
