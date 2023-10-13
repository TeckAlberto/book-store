import React from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Layout from "./Layout";
import './index.css'
import Books from "./Books.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "books",
                element: <Books/>
            }
        ]
    },
    {
        path: ""
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
