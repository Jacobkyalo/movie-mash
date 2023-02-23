import "./App.scss";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "login",
        element: <Login />,
    },
]);

function App() {
    return (
        <div className="containerr">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
