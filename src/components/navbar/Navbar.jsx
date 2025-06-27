import React, { use } from "react";
import { Link } from "react-router";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { AuthContext } from "../../provider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const userName = user?.displayName || user?.email;
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "SignOut!",
          text: "Successfully signed out.",
          icon: "success"
        });
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };
  // links
  const links = <>
    <Link to="/signin" className="hover:text-primary transition mr-2">Sign Up</Link>
    <Link to="/login" className="hover:text-primary transition">Log In</Link>
  </>
  const navigLinks = <>
    <Link to="/" className="hover:text-primary transition">Home</Link>
    <Link to="/browse" className="hover:text-primary transition">Browse All Post</Link>
    <Link to="/blog" className="hover:text-primary transition">Blogs</Link>
    <Link to="/contact" className="hover:text-primary transition">Contact Us</Link>
    {
      user && <>
        <Link to='/post' className="hover:text-primary transition">Add to Find Roommate</Link>
        {/* <Link to='/mypost' className="hover:text-primary transition">My Listings</Link> */}
      </>
    }
  </>

  return (
    <div className="bg-base-100 text-base-content shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="navbar px-4 lg:px-10 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>{navigLinks}</li>
            </ul>
          </div>
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <img src="/RoomieConnect 3D.png" alt="logo" className="w-14 h-14 rounded-xl" />
            <Link to="/" className="text-xl font-bold tracking-tight">
              <p className="block">
                <span className="text-indigo-500">Roomie</span>
                <span className="text-cyan-300">Connect</span>
              </p>
            </Link>
          </div>
        </div>

        {/* Right - Links and Actions */}
        <div className="ml-auto flex items-center gap-5 text-sm font-semibold">
          <div className="hidden lg:flex space-x-4">
            {navigLinks}
          </div>

          {/* Theme Toggle */}
          <div>
            <ThemeToggle />
          </div>

          {/* User Profile */}
          {
            user ?
              <div className="dropdown dropdown-end">
                <div tabIndex={0}
                  role="button"
                  className="avatar tooltip tooltip-left tooltip-primary"
                  data-tip={userName}
                >
                  <div className="w-10 rounded-full cursor-pointer">
                    <img
                      alt={user?.displayName || "Default User Avatar"}
                      src={user?.photoURL || 'https://img.icons8.com/ios-filled/50/user-male-circle.png'}
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li>
                    <Link to='/dashboard' className="justify-between">
                      Dashboard
                    </Link>
                  </li>
                  <button onClick={handleSignOut} className='btn btn-primary'>Logout</button>
                </ul>
              </div>
              :
              <div>
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;