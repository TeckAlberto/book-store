import useApplication from "./hooks/useApplication"

export default function Orders() {
    const { orders } = useApplication()
    
    return (
        <main>
            <h1>Ordenes</h1>

            {orders.length > 0 ? (
                orders.map( order => (
                    <h1 key={order.id}>{order.id}</h1>
                ))
            ) : (
                <p>Aun no hay ordenes</p>
            )}
        </main>
    )
}
