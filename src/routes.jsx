import { createBrowserRouter } from "react-router"
import HomePage from './pages/Home'
import MiningPage from './pages/Mining'

export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/mining", element: <MiningPage /> },
]);