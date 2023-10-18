import { useState} from "react";

export default function Book({ book }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-1/3 rounded-md shadow-md md:w-1/5">
            <img
                src={book.image}
                alt={book.title}
                className="w-full cursor-pointer h-2/3"
                onClick={openModal}
            />
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold cursor-pointer" onClick={openModal}>
                    {book.title}
                </div>
                <p className="text-base text-gray-700">{book.author}</p>
                <button className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Agregar al carrito
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6 border-4 border-indigo-800">
                        {/* Contenido del modal */}
                        <div className="bg-white rounded shadow-lg">
                            <div className="relative flex-auto p-6">
                                <h3 className="text-xl font-semibold">{book.title}</h3>
                                <p className="mb-4 text-gray-600">{book.author}</p>
                                <p className="mb-4 text-gray-700">
                                    Categoría: {book.category}
                                </p>
                                <p className="mb-4 text-gray-700">
                                    Número de páginas: {book.pages}
                                </p>
                                <p className="text-gray-700">{book.summary}</p>
                            </div>
                            <div className="flex justify-end p-6">
                                <button
                                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase transition-all duration-150 ease-linear outline-none hover:text-indigo-800 background-transparent focus:outline-none"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
