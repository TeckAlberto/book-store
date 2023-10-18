import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import SearchAside from "./SearchAside.jsx";
import useApplication from "./hooks/useApplication.jsx";
import { getCategories } from "./data/books.js";

export default function Layout() {
    const { currentOrder } = useApplication()
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
    const location = useLocation() 

    getCategories()

    return (
        <div className="flex flex-col h-screen">
            {/* Encabezado */}
            <header className="h-32 px-3 py-5 mb-5 text-white shadow-xl bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="flex items-center justify-between mb-3">
                    <Link to={"/"} className="text-2xl font-semibold">
                        E<span className="font-normal">books</span>
                    </Link>

                    {isUserLoggedIn ? (
                        <div className="flex space-x-4">

                            <p className="text-lg font-semibold">
                                <span className="font-normal">Bienvenido: </span>Jesus Alberto
                            </p>

                            <button onClick={() => setIsUserLoggedIn(false)} className="text-white hover:underline">
                                Sign Out
                            </button>


                            <div className="relative">

                                <Link to="/cart" className="text-white hover:underline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19a2 2 0 01-2 2 2 2 0 01-2-2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 19a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3M4 8l-1 9h18l-1-9"
                                        />
                                    </svg>
                                    { currentOrder.length > 0 ? 
                                        <span className="absolute p-1 text-white bg-red-600 rounded-full -top-2 -right-2">
                                            {currentOrder.length}
                                        </span> :
                                        null
                                    }
                                </Link>
                            </div>
                            
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            
                            <button onClick={() => setIsUserLoggedIn(true)} className="font-bold text-white hover:underline">
                                Sign In
                            </button>

                            <button onClick={() => setIsUserLoggedIn(true)} className="font-bold text-white hover:underline">
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>

                <nav className="flex space-x-4 text-md">
                    <Link to="/" className="text-white hover:underline">
                        Dashboard
                    </Link>
                    <Link to="/books" className="text-white hover:underline">
                        Books
                    </Link>
                    <Link to="/orders" className="text-white hover:underline">
                        Orders
                    </Link>
                </nav>
            </header>

            <div className="flex gap-10 p-2">
                { location.pathname ==='/books' ? 
                    <SearchAside /> : 
                    null

                }

                <Outlet/>
            </div>
        </div>
    );
}
