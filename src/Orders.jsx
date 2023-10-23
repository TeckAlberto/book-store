import useApplication from "./hooks/useApplication"

export default function Orders() {
    const { orders } = useApplication()
    
    return (
        <main>
            <h1 className="mb-10 text-3xl font-bold">Ordenes</h1>

            {orders.length > 0 ? (
                orders.map( order => (
                    <section className="p-3 ml-5 space-y-5 bg-white shadow-xl rounded-xl" key={order.id}>
                        
                        <p className="text-xl font-bold">Total de productos: <span className="font-normal">{order.books.length} libros</span></p>
                        <p className="text-xl font-bold">Cuenta total: <span className="font-normal">${order.total} mxn</span></p>


                        <div className="flex items-center gap-3">
                            <p className="text-xl font-bold">Proceso del envio:</p>
                            <p className="px-4 py-2 font-bold text-white bg-green-300 rounded-md text-md">En proceso</p>
                        </div>
                    </section>
                ))
            ) : (
                <p>Aun no hay ordenes</p>
            )}
        </main>
    )
}
