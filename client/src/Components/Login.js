import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from "../assets/bg.jpg";
import { FaUserAlt, FaSpinner } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('http://localhost:3003/api/v1/user/login', formData);
      console.log(response.data);
      // Store the userId in localStorage
      localStorage.setItem('userId', response.data.user._id);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error(error);
      // Optionally, display an error message to the user
    } finally {
      setLoading(false); // End loading
    }
  };

  const navigateToSignup = () => {
    navigate("/signup");
  }

  return (
    <div>
      <div className="w-screen h-screen relative text-white flex justify-center items-center">
        <div className="w-[500px] bg-black flex-col p-6 absolute z-10 items-center border-2 bg-opacity-20 rounded-xl border-[#1D9BF0] md:right-[10%]">
          <p className="w-full text-2xl">Login</p>
          <form className="" onSubmit={handleSubmit}>
            <p className="text-[14px] text-slate-500 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quis ratione vitae numquam. Sit laborum libero.
            </p>
            <div className="flex gap-8 items-center w-full">
              <div className="mt-4 ml-2 opacity-30 text-xl"><MdEmail /></div>
              <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </div>
            <div className="flex gap-8 items-center w-full">
              <div className="mt-4 ml-2 opacity-30 text-xl"><RiLockPasswordFill /></div>
              <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </div>
            <button type="submit" className="w-full p-4 bg-[#1D9BF0] mt-4 rounded hover:opacity-85 tracking-wider" disabled={loading}>
              {loading ? <FaSpinner className="animate-spin mx-auto" /> : "Login"}
            </button>
            <p className="text-[14px] opacity-50 ml-[80px] mt-2 cursor-pointer hover:opacity-100" onClick={navigateToSignup}>
              Not have account? want to craete new account?
            </p>
          </form>
        </div>
        <img className="relative h-full w-full flex" src={bg} alt="Background" />
      </div>
    </div>
  );
};

export default Login;
