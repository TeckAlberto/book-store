import { useState } from "react";

export default function Sidebar() {

    const [sesion, setSesion ] = useState(false)



    return (
            <aside className="w-3/5" >
                <h2>Details</h2>

                <p>User: <strong>Juan Hernandez</strong></p>
                {sesion ? (
                    <button
                        type="button"
                        onClick={() => setSesion(prev => !prev)}
                    >
                        <strong>Close Sesion</strong>
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => setSesion(prev => !prev)}
                    >
                        <strong>Sign Up</strong>
                    </button>
                )}


            </aside>

    );
}