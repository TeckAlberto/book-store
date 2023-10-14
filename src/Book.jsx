import { useState} from "react";

export default function Book({ book }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {image, title, author, category, pages, summary} = book
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="rounded overflow-hidden shadow-md">
            <img
                src={image}
                alt={title}
                className="w-full h-2/3 cursor-pointer"
                onClick={openModal}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 cursor-pointer" onClick={openModal}>
                    {title}
                </div>
                <p className="text-gray-700 text-base">{author}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Agregar al carrito
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        {/* Contenido del modal */}
                        <div className="bg-white rounded shadow-lg">
                            <div className="relative p-6 flex-auto">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-600 mb-4">{author}</p>
                                <p className="text-gray-700 mb-4">
                                    Categoría: {category}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Número de páginas: {pages}
                                </p>
                                <p className="text-gray-700">{summary}</p>
                            </div>
                            <div className="p-6 flex justify-end">
                                <button
                                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
