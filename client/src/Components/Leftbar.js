import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillPostcardFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { SiApostrophe } from "react-icons/si";
import axios from 'axios';
import { ImStatsDots } from "react-icons/im";

const Leftbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const userId = localStorage.getItem("userId");
  console.log(userId);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId'); 

    const fetchUserProfile = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`http://localhost:3003/api/v1/user/profile/${userId}`);
        setUser(response.data);
        console.log('Fetched user profile:', response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setError('Failed to fetch user profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="flex text-white w-[25%] h-full fixed bg-black">
      <div className="flex flex-col w-full ml-[40%] flex-end">
        <div className="w-full ml-[-10px] h-[50px] mt-4 flex items-center">
          <FaBloggerB className='text-[#1D9BF0] text-2xl' />
          <p className='text-2xl'>log</p>
        </div>

        <div className="flex flex-col mt-[30px] ml-[-70px] w-full right-0 text-white mr-10 h-full">
          <Link to="/" className={`flex gap-4 text-[24px] font-semibold justify-center items-center  hover:opacity-100 ${location.pathname === '/' ? "opacity-100 " : "opacity-70"}`}>
            <IoHomeSharp />
            <p>Home</p>
          </Link>

          <Link to="/post" className={`flex gap-4 mr-[20px] text-[24px] mt-4 font-semibold justify-center items-center  hover:opacity-100 ${location.pathname === '/post' ? "opacity-100" : "opacity-70"}`}>
            <BsFillPostcardFill />
            <p>Post</p>
          </Link>

          <Link to="/mypost" className={`flex gap-4 ml-[18px] text-[24px] mt-4 font-semibold justify-center items-center  hover:opacity-100 ${location.pathname === '/mypost' ? "opacity-100" : "opacity-70"}`}>
            <SiApostrophe />
            <p>My Post</p>
          </Link>

          <Link to="/profile" className={`flex gap-4 text-[24px] mt-4 font-semibold justify-center items-center  hover:opacity-100 ${location.pathname === '/profile' ? "opacity-100" : "opacity-70"}`}>
            <FaUserCircle />
            <p>Profile</p>
          </Link>

          <Link to="/trending" className={`flex gap-4 text-[24px] mt-4 ml-6 font-semibold justify-center items-center  hover:opacity-100 ${location.pathname === '/trending' ? "opacity-100" : "opacity-70"}`}>
            <ImStatsDots />
            <p>Trending</p>
          </Link>
        </div>
        
        <button onClick={toggleMenu} className="mt-4 hover:bg-[#2F3336] mr-2 mb-8 p-2 rounded hover:opacity-90">
          <div className="flex">
            {user && (
              <div className="flex items-center ">
                <img className='rounded-full h-[50px]  w-[50px]' src={user.profileImage} alt="" />
                <div className="flex flex-col ml-2 text-left max-w-xs">  
                  <p className='text-[18px] font-bold' >{user.name}</p>
                  <p className="truncate font-semibold text-md text-[14px] opacity-70 ">{user.email}</p>
                </div>
              </div>
            )}
          </div>
        </button>
        
        {toggle && (
          <div className="absolute text-xl flex flex-col w-[200px]  p-2 justify-center items-center  shadow-2xl border-[0.1px] border-[#2F3336]  left-[40%] rounded bottom-[15%]">
            <Link to='/profile' className="p-[5px] hover:bg-[#2F3336] w-full  pl-[20%] rounded" onClick={toggleMenu} >Profile</Link>
            <div className="p-[5px] hover:bg-[#2F3336] w-full pl-[20%] rounded" onClick={handleLogout} >Logout</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leftbar;
