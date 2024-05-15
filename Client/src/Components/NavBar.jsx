import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { GiWorld } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const NavBar = () => {
  let Links = [
    { name: 'HOME', link: '/' },
    { name: 'TRIPS', link: '/place-selection' },
    { name: 'ACCOMADATIONS', link: '/acc-selection' },
    { name: 'LIST A PLACE', link: '/hotel-form' },
    { name: 'Q/A', link: '/hotel-form' },
   
  ];
  let [open, setOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="h-20 z-30 shadow-lg w-full fixed top-0 left-0 bg-yellow-500 bg-opacity-40">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-extrabold text-2xl cursor-pointer flex items-center gap-1 text-cyan-400">
          <GiWorld className=" hover:text-cyan-400 w-7 h-7 text-cyan-700" />{' '}
          {/* WorldIcon */}
          <span className="0 hover:text-cyan-800">TravelPro</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        ></div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-cyan-500 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <button
            className="btn bg-cyan-500 text-white md:ml-80 font-semibold px-3 py-1 duration-500 md:static"
            style={{ width: '100px' }}
          >
            Register
          </button> */}
          {userInfo ? (
            <div className="relative ml-4">
              <button
                onClick={handleMenuToggle}
                className="w-auto flex items-center justify-center bg-cyan-500 text-white rounded-full font-semibold px-3 py-1 duration-500 static md:ml-80 hover:bg-cyan-600 hover:text-gray-100"
                id="userMenu"
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                <FaUser className="mx-1" />
                {userInfo.name}
              </button>
              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="userMenu"
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-100"
                    role="menuitem"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block bg-cyan-600 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-600"
                    role="menuitem"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-cyan-500  rounded-full text-white md:ml-80 font-semibold px-3 py-1 duration-500 md:static flex flex-col items-center hover:bg-cyan-600 hover:text-gray-100"
              style={{ width: '80px' }}
            >
              Log in
            </Link>
          )}
        </ul>
        {/* Register button */}
      </div>
    </div>
  );
};

export default NavBar;
