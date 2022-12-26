import DoctorProfile from "../../Pages/DoctorProfile/DoctorProfile/DoctorProfile";
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
            { path: "/doctors", element: <Doctors></Doctors> },
            { path: "/doctor-profile", element: <DoctorProfile></DoctorProfile> }
        ]
    },
]);

export default router;