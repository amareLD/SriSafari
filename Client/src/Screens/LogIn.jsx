import React, { useState, useEffect } from 'react';
import '../Styles/LogIn.css';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useLoginMutation,
  useRegisterMutation,
} from '../slices/usersApiSlice.js';
import { setCredentials } from '../slices/authSlice.js';
import { toast } from 'react-toastify';

export default function LogIn() {
  const [userType, setUserType] = useState(''); // Define userType state variable and setUserType setter function
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('login') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
    const imgBtn = document.querySelector('.img__btn');
    const cont = document.querySelector('.cont');

    const handleBtnClick = () => {
      cont.classList.toggle('s--signup');
    };

    imgBtn.addEventListener('click', handleBtnClick);

    return () => {
      imgBtn.removeEventListener('click', handleBtnClick);
    };
  }, [userInfo, redirect, navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password != password) {
      toast.error('Password do not match');
      return;
    } else {
      try {
        const res = await register({
          userType,
          name,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success('Successfully Registerd');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success('Login successful!');
      
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleClearInputs = () => {
    setEmail('');
    setPassword('');
    setName('');
    setUserType('');
  };

  return (
    <>
      <div className="cont  mt-40">
        <div className="form sign-in ">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit btn border-t-2 border-l-1 border-b-4 border-r-2    border-black duration-200 pt-2   border rounded-sm " onClick={handleSignIn}>
           Log In
          </button>
          {/* <button type="button" className="fb-btn">
            Connect with <span>facebook</span>
          </button> */}
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Register and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn " onClick={handleClearInputs}>
              <span className="m--up">Register</span>
              <span className="m--in">Log In</span>
            </div>
          </div>

          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Select User Type</span>
              <div className='flex flex-raw gap-5'>
                <button
                  type="button"
                  className="user-type-btn shadow-xl bg-white rounded-lg py-1 px-1 my-1 hover:scale-105 transition-all mt-[10px] cursor-pointer"
                  onClick={() => setUserType('traveller')}
                  style={{
                    backgroundColor:
                      userType === 'traveller' ? '#007bff' : '#ffffff',
                    color: userType === 'traveller' ? '#ffffff' : '#000000',
                  }}
                >
                  Traveller
                </button>
                <button
                  type="button"
                  className="user-type-btn shadow-xl bg-white rounded-lg py-1 px-1 my-1 hover:scale-105 transition-all mt-[10px] cursor-pointer "
                  onClick={() => setUserType('business')}
                  style={{
                    backgroundColor:
                      userType === 'business' ? '#007bff' : '#ffffff',
                    color: userType === 'Business' ? '#ffffff' : '#000000',
                  }}
                >
                  Business
                </button>
              </div>
            </label>
            {userType && (
              <>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    //placeholder="Enter Name"
                    autoComplete="off"
                    name="name"
                    className="form-control rounded-0"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label htmlFor="email">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    className="form-control rounded-0"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="password">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    className="form-control rounded-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <button  type=" button" className="submit" onClick={handleSignUp}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
