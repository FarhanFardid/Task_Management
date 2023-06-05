import logo from "../assets/png-clipart-black-alarm-cTask genius logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" grid md:grid-cols-3 bg-slate-900 md:p-8 p-5 text-white  ">
      <div className=" items-center justify-center flex flex-col space-y-2">
        <img
          src={logo}
          className="w-12 h-12 rounded-full mx-auto"
          alt=" Logo"
        />
        <h2 className="text-lg font-bold text-white">Task Genius</h2>
      </div>

      <div className=" items-center justify-center flex flex-col space-y-2">
        <h3 className="font-bold text-red-600 text-base">Follow Us</h3>
        <ul className="flex ">
          <li className="pr-2">
            <a href="#">
              <FaFacebookSquare className="w-4 h-4" />
            </a>
          </li>
          <li className="pr-2">
            <a href="#">
              <FaInstagramSquare className="w-4 h-4" />
            </a>
          </li>
          <li className="pr-2">
            <a href="#">
              <FaTwitterSquare className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
      <div className=" items-center justify-center flex flex-col space-y-2">
        <h3 className="font-bold text-red-600 text-base">Address</h3>
        <p className="text-xs font-medium">221/B Baker Street, London, UK</p>
      </div>
      <div className="md:mt-5 col-span-4 text-center">
        <p className="font-bold text-white  text-lg ">
          &copy; {new Date().getFullYear()} Task Genius. All rights reserved.
        </p>
        <p className="font-bold text-white  text-sm ">
          Developed By &copy;{" "}
          <span className="text-red-600">Farhan Fardid</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
