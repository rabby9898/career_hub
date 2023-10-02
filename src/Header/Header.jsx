import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import auth from "../Firebase/firebase.config";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/applied-jobs">Applied Jobs</NavLink>
      </li>
      <li className="mr-20">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-base md:text-xl"
          >
            CareerHub
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user ? (
          <div className="w-[30%]">
            <div className="flex  gap-2">
              <ul className="menu menu-horizontal">
                <li>
                  <details>
                    <summary>
                      <FaUserCircle className="text-2xl" />
                    </summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>{user?.displayName}</a>
                      </li>
                      <li>
                        <a>{user?.email}</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <button onClick={handleLogOut}>Sign Out</button>
          </div>
        ) : (
          ""
        )}
        <div className="navbar-end">
          <a className=" text-white btn bg-gradient-to-r from-indigo-500  to-purple-500 my-5 text-sm md:text-base">
            Start Applying
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
