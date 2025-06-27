import React from 'react';
import { NavLink, Outlet } from "react-router";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 shadow-md p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

                <nav className="flex flex-col space-y-4">
                    <NavLink
                        to=""
                        end
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-primary border-l-4 border-primary pl-3"
                                : "hover:text-primary"
                        }
                    >
                        Overview
                    </NavLink>
                    <NavLink
                        to="post"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-primary border-l-4 border-primary pl-3"
                                : "hover:text-primary"
                        }
                    >
                        Add Post
                    </NavLink>

                    <NavLink
                        to="mypost"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-primary border-l-4 border-primary pl-3"
                                : "hover:text-primary"
                        }
                    >
                        My Post
                    </NavLink>

                    <NavLink
                        to="profile"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-primary border-l-4 border-primary pl-3"
                                : "hover:text-primary"
                        }
                    >
                        My Profile
                    </NavLink>
                </nav>
            </aside>

            {/* Right Content Area */}
            <main className="ml-64 flex-1 overflow-y-auto p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
