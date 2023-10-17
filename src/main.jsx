import React from 'react'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Layout from "./Layout";
import './index.css'
import Books from "./Books.jsx";
import { ApplicationProvider } from './context/ApplicationProvider';
import Dashboard from './Dashboard';
import Orders from './Orders';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "books",
                element: <Books/>
            },
            {
                path: "orders",
                element: <Orders/>
            }
        ]
    },
    {
        path: ""
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationProvider>
        <RouterProvider router={router}/>
    </ApplicationProvider>
  </React.StrictMode>,
)
