import { createBrowserRouter } from "react-router-dom"
import MainRoot from '../components/MainRoot'
import Home from '../pages/Home'
import About from '../pages/About'
import Help from '../pages/Help'
import Services from '../pages/Services'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "help",
                element: <Help />
            },
            {
                path: "services",
                element: <Services />
            },
        ]
    }
])