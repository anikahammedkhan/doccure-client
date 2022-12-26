import Doctors from "../../Pages/Doctors/Doctors/Doctors";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/doctors", element: <Doctors></Doctors> }
        ]
    },
]);

export default router;