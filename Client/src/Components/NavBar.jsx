import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { GiWorld } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const NavBar = () => {
  let Links = [
    // { name: 'HOME', link: '/' },
    { name: 'TRIPS', link: '/place-selection' },
    { name: 'ACCOMADATIONS', link: '/acc-selection' },
    { name: 'LIST YOUR PLACE', link: '/hotel-form' },
    { name: 'Q/A?', link: '/hotel-form' },
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
    <div className="h-20 z-30 shadow-lg w-full fixed top-0 left-0 bg-yellow-100 bg-opacity-40">
      <div className="md:flex items-center justify-between bg-transparent py-4 md:px- px-7 ">
        {/* logo section */}
        <div className="px-40 font-extrabold text-2xl cursor-pointer flex items-center gap-1 text-yellow-400">
          <img
            src="/sri-lanka-flag-round-circle-icon.svg" // Reference to the SVG in the public folder
            alt="Sri Lankan Flag"
            className="hover:text-yellow-400 w-10 h-10 text-yellow-700"
          />{' '}
          {/* WorldIcon */}
          <span className="0 hover:text-orange-600">SriSafari</span>
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
                className="text-gray-800 hover:text-yellow-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          {userInfo ? (
            <div className="relative ml-4 flex flex-raw">
              <button className="rounded-sm w-auto flex items-center justify-center bg-yellow-100  text-orange-400  font-semibold px-3 py-1 duration-500 static md:ml-80 hover:bg-orange-600 hover:text-gray-100">
                <FaHeart className="mr-1 " />
                Whishlist
              </button>
              <button
                onClick={handleMenuToggle}
                className="rounded-sm w-auto flex items-center justify-center bg-yellow-400 text-white  font-semibold px-3 py-1 duration-500 static md:ml-2 hover:bg-yellow-600 hover:text-gray-100"
                id="userMenu"
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
              >
                <FaUser className="mx-1" />
                {userInfo.name}
              </button>
              {isMenuOpen && (
                <div
                  className="rounded-sm absolute right-0 mt-2 w-48 bg-white  shadow-md z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="userMenu"
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                    role="menuitem"
                  >
                    Profile
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block bg-yellow-600 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-600 rounded-sm"
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
              className="btn bg-cyan-500  rounded-sm text-white md:ml-80 font-semibold px-3 py-1 duration-500 md:static flex flex-col items-center hover:bg-cyan-600 hover:text-gray-100"
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
