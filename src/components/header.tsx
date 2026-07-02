import { Link, redirect, useLocation } from "react-router";
import { useCart } from "../context/cart-context";
import ThemeController from "./theme-controller";
import { useAuth } from "../context/auth-contex/auth-context";

function Header() {
  const location = useLocation();
  const { items } = useCart();
  const { user } = useAuth()
  if (location.pathname != "login" && !user) redirect("/login")
  return (
    <div className="navbar bg-base-100 shadow-sm mb-4">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          <h1 className="font-bold">FC</h1>
        </Link>
      </div>
      <div className="flex-none gap-4">
        <Link to={"/customers/checkout"}>
          <div className="dropdown dropdown-end">
            <div role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className="badge badge-sm indicator-item">{items.reduce((a, b) => a + b.quantity, 0)}</span>
              </div>
            </div>
          </div>
        </Link>
        <ThemeController />
        {user ?
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.avatar} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to={"/customers/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div> : <>
            <Link className="btn btn-ghost" to={"/login"}>
              <p>Login</p>
            </Link></>}
      </div>
    </div>
  );
}

export default Header;
