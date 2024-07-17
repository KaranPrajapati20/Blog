import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { FaLinesLeaning } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

const Music = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUserProfile = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `http://localhost:3003/api/v1/user/profile/${userId}`
        );
        setUser(response.data);
        console.log("Fetched user profile:", response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        setError("Failed to fetch user profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/v1/user/getAllPost');
        const sports = response.data.filter(sp => sp.cat == 'music')
        setPosts(sports);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (userId) {
      fetchUserProfile();
      fetchPosts();
    }
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await axios.put(`http://localhost:3003/api/v1/user/post/${postId}/like`);
      console.log(response.data); // Log the updated post after like
      updatePostLikes(postId, response.data.likes, 'like');
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDislike = async (postId) => {
    try {
      const response = await axios.put(`http://localhost:3003/api/v1/user/post/${postId}/dislike`);
      console.log(response.data); // Log the updated post after dislike
      updatePostLikes(postId, response.data.dislikes, 'dislike');
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };

  const updatePostLikes = (postId, count, type) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post._id === postId ? { ...post, [type === 'like' ? 'likes' : 'dislikes']: count } : post
      )
    );
  };



  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };
  

  return (
    <div>
      <div className="flex items-center text-white fixed md:w-[50%] w-[75%] h-[50px] border-[0.1px] border-b-[#2F3336] border-[#2F3336] z-10 bg-black bg-opacity-80 ">
        <div className="ml-[20%] font-bold cursor-pointer  mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0]  ">
          <p
            className={`pb-2  text-white text-opacity-90 ${
              location.pathname === "/" ? "opacity-100" : "opacity-70"
            } `}
          >
            For you
          </p>
        </div>
        <div className="ml-[40%] font-bold cursor-pointer  mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0] ">
          <p
            className={`pb-2 text-white text-opacity-90 ${
              location.pathname === "/trending" ? "opacity-100" : "opacity-70"
            } `}
          >
            Trending
          </p>
        </div>
      </div>
      <div className="bg-black text-white  z-0 p-4 border-x-[0.1px] border-[#2F3336] flex h-full w-full">
        <div className="mt-[55px] w-full">
          <div className=" flex w-full  ">
            {user && (
              <img
                className="h-[60px] w-[60px] rounded-full "
                src={user.profileImage}
                alt=""
              />
            )}
            <div className="flex flex-col ml-4 border-b-[0.2px] border-b-[#2F3336] w-[85%] pb-4 ">
              <p className="text-xl  opacity-70 ">Want to post....</p>
              <div className="flex">
                <FaEarthAfrica className="mt-2 text-[#1D9BF0]" />
                <p className="text-[16px] text-[#1D9BF0] font-semibold ml-2 mt-[4px]">
                  Everyone can see...
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b-[0.2px] border-b-[#2F3336] w-[96%] pb-4">
            <div className="flex gap-4 ml-20 mt-8 text-[#1D9BF0]  ">
              <FaImage />
              <MdGifBox />
              <FaLinesLeaning />
              <MdEmojiEmotions />
              <BsCalendarDateFill />
            </div>
            <div className="flex px-4 py-2 mr-[2%] bg-[#1D9BF0] rounded-full font-bold opacity-70 mt-4">
              Post
            </div>
          </div>

          {posts.slice().reverse().map((post) => (
            <div className="flex w-full p-4 border-b-[0.2px] border-b-[#2F3336] border-opacity-70  " key={post._id}>
              <div>
                <img
                  className="w-[50px] h-[50px] rounded-full "
                  src={post.user.profileImage} 
                  alt=""
                />
              </div>

              <div className="flex ml-4 flex-col  w-full   ">
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-[18px] font-semibold">{post.name}</p>
                    <p className="text-[16px] opacity-70 ">{post.title}</p>
                    <p className="text-[14px] opacity-70">{post.desc}</p>
                  </div>
                  <div className="flex opacity-70  mr-4 ">
                    <p className="">{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <img className=" rounded-md mt-4 ml-[20px] max-h-[400px] w-[80%] " src={post.image} alt="" />
                <div className="flex mt-4 mb-2  ">

                    <div className="flex cursor-pointer p-2 rounded-full bg-[#1D9BF0] gap-2 px-4 ml-2 justify-center items-center " onClick={() => handleLike(post._id)} >
                    <BiSolidLike /> <p>{formatNumber(post.likes)}</p>
                    </div>

                    <div className="flex cursor-pointer p-2 rounded-full bg-[#1D9BF0] gap-2 px-4 ml-2 justify-center items-center " onClick={() => handleDislike(post._id)} >
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

export default Music;



