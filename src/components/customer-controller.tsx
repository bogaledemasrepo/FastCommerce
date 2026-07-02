import { Outlet } from "react-router"
import Header from "./header"

function CustomerController() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default CustomerController