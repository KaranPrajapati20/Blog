import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { FaLinesLeaning } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import emptyFile from "../assets/folder.png"

const Mypost = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

    const fetchUserPosts = async () => {
      setLoading(true);
      setError('');

      try {
        if (userId) {
          const response = await axios.get(`http://localhost:3003/api/v1/user/user/${userId}/posts`);
          setUserPosts(response.data);
          console.log('Fetched user posts:', response.data);
        } else {
          setError('User ID not found in localStorage.');
        }
      } catch (error) {
        console.error('Error fetching user posts:', error.message);
        setError('Failed to fetch user posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  // User profile image
  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

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

  return (
    <div>
      <div className="flex items-center text-white fixed w-[50%] h-[50px] border-[0.1px] border-b-[#2F3336] border-[#2F3336] z-10 bg-black bg-opacity-80 ">
        <div className="ml-[20%] font-bold cursor-pointer mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0] ">
          <p className="pb-2 text-white text-opacity-90 ">My Posts</p>
        </div>
      </div>
      <div className="bg-black text-white z-0 p-4 border-x-[0.1px]  min-h-screen border-[#2F3336] flex w-full">
        <div className="mt-[55px] w-full flex flex-col items-center">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && userPosts.length === 0 && (
            <div className="flex flex-col items-center">
              <img src={emptyFile} alt="No posts found  " className="w-[200px] h-[200px] mt-[60%] opacity-70" />
              <p className="mt-4 text-xl font-semibold">No posts found.</p>
            </div>
          )}
          {userPosts.length > 0 && userPosts.slice().reverse().map((post) => (
            <div className="flex w-full p-4 border-b-[0.2px] border-b-[#2F3336] border-opacity-70" key={post._id}>
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={user.profileImage} 
                  alt=""
                />
              </div>
              <div className="flex ml-4 flex-col w-full">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-[18px] font-semibold">{post.name}</p>
                    <p className="text-[16px] opacity-70">{post.title}</p>
                    <p className="text-[14px] opacity-70">{post.desc}</p>
                  </div>
                  <div className="flex opacity-70 mr-4">
                    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <img className="rounded-md mt-4 ml-[20px] max-h-[400px] w-[80%]" src={post.image} alt="" />
                <div className="flex mt-4 mb-2">
                  <div className="flex cursor-pointer p-2 rounded-full bg-[#1D9BF0] gap-2 px-4 ml-2 justify-center items-center" >
                    <BiSolidLike /> <p>{formatNumber(post.likes)}</p>
                  </div>
                  <div className="flex cursor-pointer p-2 rounded-full bg-[#1D9BF0] gap-2 px-4 ml-2 justify-center items-center" >
                    <BiSolidDislike /> <p>{formatNumber(post.dislikes)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mypost;
