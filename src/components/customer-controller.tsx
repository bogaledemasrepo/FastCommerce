import { Outlet, useNavigate } from "react-router"
import Header from "./header"
import { useAuth } from "../context/auth-contex/auth-context";

function CustomerController() {
    const navigate = useNavigate();
    const { user } = useAuth();
    if (!user) navigate('/login', { replace: true });
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default CustomerController