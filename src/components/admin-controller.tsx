import { Link, Outlet, useNavigate, useResolvedPath } from "react-router";
import { useAuth } from "../context/auth-contex/auth-context";
import Header from "./admin-header";

export default function AdminController() {
    useResolvedPath(AdminController.name);
    const navigate = useNavigate();
    const { user } = useAuth();
    if (!user) navigate('/login', { replace: true });
    else if (user.role != "ROLE_ADMIN") navigate('/customers', { replace: true });

    return (
        <div className="dashboard-layout">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="p-0 w-full bg-base-300">

                        <Header>
                            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {/* Sidebar toggle icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                            </label>
                        </Header>
                    </nav>
                    {/* Page content here */}
                    {/* Dynamic Content Area */}
                    <main>
                        <Outlet />
                    </main>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            <li><Link to={"/admins"}>
                                <button className="py-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    <span className="text-xl font-bold">FC</span>
                                    <span className="is-drawer-close:hidden font-bold">ommerce Admin</span>
                                </button>
                            </Link>
                            </li>
                            {/* Homepage */}

                            <li><Link to={"/admins"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M3 3h7v7H3z"></path>
                                        <path d="M14 3h7v7h-7z"></path>
                                        <path d="M14 14h7v7h-7z"></path>
                                        <path d="M3 14h7v7H3z"></path>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Dashboard</span>
                                </button>
                            </Link></li>
                            {/* Categories */}
                            <li><Link to={"/admins/categories"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Categories">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                                        <path d="m3.3 7 8.7 5 8.7-5"></path>
                                        <path d="M12 22V12"></path>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Categories</span>
                                </button>
                            </Link></li>
                            
                            {/* Products */}
                            <li><Link to={"/admins/products"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Products">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                                        <path d="m3.3 7 8.7 5 8.7-5"></path>
                                        <path d="M12 22V12"></path>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Products</span>
                                </button>
                            </Link></li>

                            {/* Orders */}
                            <li><Link to={"/admins/orders"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Orders">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                        <path d="M3 6h18"></path>
                                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Orders</span>
                                </button>
                            </Link></li>

                            {/* Profile */}
                            <li><Link to={"/admins/profile"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Profile</span>
                                </button>
                            </Link></li>

                            {/* Settings */}
                            <li><Link to={"/admins/settings"}>
                                <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span className="px-2 is-drawer-close:hidden">Settings</span>
                                </button>
                            </Link>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}
