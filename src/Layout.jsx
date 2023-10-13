import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SearchAside from "./SearchAside.jsx";

export default function Layout() {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="grid grid-cols-8 grid-rows-6 gap-3 h-screen">
            {/* Encabezado */}
            <header className="col-span-full row-start-1 row-end-2 p-3 shadow-xl h-32 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <div className="flex justify-between items-center mb-3">
                    <Link to={"/"} className="text-2xl font-semibold">
                        E<span className="font-normal">books</span>
                    </Link>

                    {isOpen ? (
                        <div className="flex space-x-4">
                            <button onClick={() => setIsOpen(false) } className="text-white hover:underline">
                                Sign In
                            </button>
                            <button  className="text-white hover:underline">
                                Sign Up
                            </button>
                        </div>
                    ) : (
                        <div className="flex space-x-4 items-center">
                            <p className="text-lg font-semibold">Jesus Alberto</p>
                            <button onClick={() => setIsOpen(true)} className="text-white hover:underline">
                                Close Session
                            </button>
                        </div>
                    )}
                </div>

                <nav className="flex space-x-4 text-sm">
                    <Link to="/dashboard" className="text-white hover:underline">
                        Dashboard
                    </Link>
                    <Link to="/library" className="text-white hover:underline">
                        Library
                    </Link>
                    <Link to="/profile" className="text-white hover:underline">
                        Profile
                    </Link>
                    <Link to="/settings" className="text-white hover:underline">
                        Settings
                    </Link>
                </nav>
            </header>

            <SearchAside />

            <Outlet />
        </div>
    );
}
