import { useState } from "react";
import useApplication from "./hooks/useApplication";

export default function Cart() {
    const { currentOrder, handleAddBook, handleSubstractBook, setCurrentOrder, handleDeleteBook, orders, setOrders } = useApplication();

    const [ isModal, setIsModal ] = useState(false)


    const getTotal = () => {
        let total = 0
        currentOrder.forEach(currentBook => {
            const { price, count } = currentBook
            total += price * count
        });

        
        return total
    }

    const handleOrderFinal = () => {
        setOrders([...orders, {id: crypto.randomUUID(), books: currentOrder, total: getTotal()}])

        setCurrentOrder([])
    }
    
    return (
        <main className="relative flex flex-col mx-auto">
            <h1 className="mb-5 text-3xl font-bold">Ordenes</h1>

            {currentOrder.length > 0 && (
                <button
                    onClick={() => setIsModal(true)}
                    className="w-1/5 py-2 my-4 font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-800"

                >
                    Verificar Compra
                </button>
            )}
            
            {isModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-1/3 mx-auto my-6 bg-white border-4 border-indigo-800 h-1/3 w-3xl">
                        {/* Contenido del modal */}
                        
                            <div className="flex-auto p-6">
                                <h3 className="mb-5 text-xl font-semibold">Elija su metodo de envio</h3>
                                
                                <select name="" id="">
                                    <option value="">-- Selecione una opcion --</option>
                                    <option value="fedex">FedEx</option>
                                    <option value="estafeta">Estafeta</option>
                                    <option value="redpack">RedPack</option>
                                    <option value="ups">UPS</option>
                                    <option value="dhl">DHL</option>
                                </select>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-bold">Total de su cuenta</h3>
                                <p className="text-xl">${getTotal()} mxn</p>
                            </div>

                            <button
                                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-green-500 uppercase transition-all duration-150 ease-linear outline-none hover:text-green-700 background-transparent focus:outline-none"
                                type="button"
                                onClick={() => {
                                    setIsModal(false)
                                    handleOrderFinal()   
                                }}
                            >
                                Completar Compra
                            </button>

                            <button
                                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase transition-all duration-150 ease-linear outline-none hover:text-indigo-800 background-transparent focus:outline-none"
                                type="button"
                                onClick={() => setIsModal(false)}
                            >
                                Cerrar
                            </button>
                        
                    </div>
                </div>
            )}

            {currentOrder.length > 0 ? (
                <table className="table-auto">
                    <thead>
                        <tr className="bg-neutral-700">
                            <th className="px-10 py-2 text-3xl text-white">Titulo</th>
                            <th className="px-10 py-2 text-3xl text-white">Cantidad</th>
                            <th className="px-10 py-2 text-3xl text-white">Acciones</th>
                            <th className="px-10 py-2 text-3xl text-white">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentOrder.map((book) => (
                            <tr key={book.id} className="bg-slate-500">
                                <td className="px-10 py-2 text-center text-white">
                                    <p>{book.title}</p>
                                </td>
                                <td className="px-10 py-2 text-center text-white">
                                    <p>{book.count}</p>
                                </td>
                                <td className="flex justify-between gap-5 px-10 py-2">
                                    <button
                                            className="p-1 font-bold text-white bg-blue-700 rounded-md"
                                            onClick={() => handleAddBook(book)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                            </svg>
                                    </button>
                                    <button
                                        className="p-1 font-bold text-white bg-yellow-500 rounded-md"
                                        onClick={() => handleSubstractBook(book)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                        </svg>

                                    </button>
                                    <button
                                        className="p-1 font-bold text-white bg-red-700 rounded-md"
                                        onClick={() => handleDeleteBook(book)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                        </svg>

                                    </button>
                                    
                                </td>
                                <td className="px-10 py-2 text-center text-white">
                                    <p>${book.count * book.price}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Aun no hay nada en el carrito</p>
            )}
        </main>
    );
}
