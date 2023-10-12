import { Outlet, Link} from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout () {

    return (
        <div className="flex justify-between">
            <header className="w-full">
                <nav>

                </nav>

                <h1 className="text-3xl">Layout</h1>

            </header>



            <Sidebar/>
        </div>
    )

}