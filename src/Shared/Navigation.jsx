import { Link } from "react-router-dom";
import logo from "../assets/png-clipart-black-alarm-cTask genius logo.png";

const Navigation = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/addTask">Add Task</Link>
      </li>
      <li>
        <Link to="/viewTasks">View Tasks </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-900 text-white  max-w-screen-xl ">
      <div className="navbar-start">
        <a className=" normal-case  ">
          <img
            src={logo}
            alt="logo"
            className=" md:w-20 md:h-20 md:p-1 md:block md:rounded-full hidden md:mr-3 "
          />
        </a>
        <p className=" md:text-2xl text-lg font-bold ms-1  ">TaskGenius</p>
        <div className="dropdown navbar-center">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800  rounded-box w-52 font-bold"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navOptions}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navigation;
