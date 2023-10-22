//import { useState } from "react";
import { maxPagesOfBooks } from "./data/books.js";
import useApplication from "./hooks/useApplication.jsx";
export default function SearchAside() {

    //const [ rangePages, setRangePages ] = useState(0)
    const {handleCurrentCategory, categories, category, pages, setPages, param, setParam} = useApplication()

    const maxPages = maxPagesOfBooks()


    return (
        <aside className="w-1/5 p-3 bg-gray-200 rounded-lg shadow-sm h-80">
            <h2 className="mb-4 text-lg font-semibold">Search</h2>

            {/* Barra de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="search books..."
                    value={param}
                    onChange={e => setParam(e.target.value)}
                />
            </div>

            {/* Filtro por Categoría */}
            <div className="mb-4">
                <label className="block text-sm font-medium">Categories</label>
                <select 
                    className="w-full px-3 py-2 border rounded-md"
                    value={category}
                    onChange={(e) => handleCurrentCategory(e.target.value)}
                    
                >
                    <option value={""}>--Select an option--</option>
                    {categories.map( (categorie, index) => (
                        <option key={index} value={categorie}>{categorie}</option>
                    ) )}
                </select>
            </div>
            
            <div>
                <label className="block text-sm font-medium">Number of pages</label>
                <input
                    type="range"
                    min={0}
                    max={maxPages}
                    className="w-full py-3"
                    onChange={e => setPages(e.target.value)}
                    value={pages}
                />
                <output className="font-bold text-md">{pages}</output>
            </div>
        </aside>
    );
}
