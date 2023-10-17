import useApplication from "./hooks/useApplication.jsx";
export default function SearchAside() {

    const {handleCurrentCategory} = useApplication()

    const movieCategories = [
        "Acción",
        "Comedia",
        "Drama",
        "Ciencia ficción",
        "Fantasía",
        "Aventura",
        "Terror",
        "Animación",
        "Romance",
        "Misterio",
        "Crimen",
        "Superhéroes",
        "Biografía",
        "Históricas",
        "Guerra",
        "Western",
        "Musical",
        "Deportes",
        "Familiares",
        "Documentales"
    ]



    return (
        <aside className="w-1/5 p-4 bg-gray-200 rounded-lg shadow-sm h-80">
            <h2 className="mb-4 text-lg font-semibold">Search</h2>

            {/* Barra de búsqueda */}
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="search books..."
                />
            </div>

            {/* Filtro por Categoría */}
            <div className="mb-4">
                <label className="block text-sm font-medium">Categories</label>
                <select 
                    className="w-full px-3 py-2 border rounded-md"
                    onChange={(e) => handleCurrentCategory(e.target.value)}
                >
                    <option value={""}>--Select an option--</option>
                    {movieCategories.map( (categorie, index) => (
                        <option key={index} value={categorie}>{categorie}</option>
                    ) )}
                    {/* Agrega más opciones de categoría según tus necesidades */}
                </select>
            </div>

            {/* Filtro por Cantidad de Páginas */}
            <div>
                <label className="block text-sm font-medium">Number of pages</label>
                <input
                    type="number"
                    min={"1"}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Cantidad de páginas..."
                />
            </div>
        </aside>
    );
}
