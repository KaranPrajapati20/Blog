// import React from "react";
// import { FaCalendarAlt } from "react-icons/fa";

// const Profile = () => {
//   const banner =
//     "https://marketplace.canva.com/EAE2cQaUHVA/1/0/400w/canva-black-minimal-motivation-quote-linkedin-banner-6a_M22OYl6w.jpg";
//   return (
//     <div>
//       <div className="flex items-center text-white fixed w-[50%] h-[50px] border-[0.1px] border-b-[#2F3336] border-[#2F3336] z-10 bg-black bg-opacity-80 ">
//         <div className="ml-[20%] font-bold cursor-pointer  mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0] ">
//           <p className="pb-2 text-white text-opacity-90 ">For you</p>
//         </div>
//       </div>
//       <div className="bg-black text-white  z-0 p-4 border-x-[0.1px] border-[#2F3336] flex h-[1000px] w-full">
//         <div className="mt-[55px] flex flex-col w-full ">
//           <img src={banner} alt="" className="w-full h-[200px] rounded-md " />
//           <div className="rounded-full h-[120px] w-[120px] mt-[-60px] ml-4 p-[6px] bg-black ">
//             <img src={banner} alt="" className="w-full h-full rounded-full " />
//           </div>
//           <p className="text-2xl font-semibold">karan Prajapati</p>
//           <p className="text-md text-white opacity-70 font-semibold">
//             prajapatikaran677@gmail.com
//           </p>
//           <div className="flex  gap-2 mt-2 items-center text-md text-white opacity-70 font-semibold">
//             <FaCalendarAlt />
//             <p> Joined 20-07-2001</p>
//           </div>
//           <div className=" bg-transparent border-[0.2px] flex flex-col gap-[10px] rounded-xl mt-4 opacity-70 w-[150px] text-white border-opacity-70 h-[100px] justify-center items-center " >
//             <p className="text-2xl font-bold " >0</p>
//             <p className="text-md font-semibold" >Blogs</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/api/v1/user/profile/${userId}`);
        console.log(response);
        setProfile(response.data);
        console.log("Fetched user profile:", response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        setError("Failed to fetch user profile. Please try again later.");
      }
    };

    if (userId) {
      fetchUserProfile();
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }


  const banner =
    "https://marketplace.canva.com/EAE2cQaUHVA/1/0/400w/canva-black-minimal-motivation-quote-linkedin-banner-6a_M22OYl6w.jpg";
  return (
    <div>
      <div className="flex items-center text-white fixed w-[50%] h-[50px] border-[0.1px] border-b-[#2F3336] border-[#2F3336] z-10 bg-black bg-opacity-80 ">
        <div className="ml-[20%] font-bold cursor-pointer  mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0] ">
          <p className="pb-2 text-white text-opacity-90 ">Profile</p>
        </div>
      </div>
      <div className="bg-black text-white  z-0 p-4 border-x-[0.1px] border-[#2F3336] flex h-[1000px] w-full">
        <div className="mt-[55px] flex flex-col w-full ">
          <img src={banner} alt="" className="w-full h-[200px] rounded-md " />
          <div className="rounded-full h-[120px] w-[120px] mt-[-60px] ml-4 p-[6px] bg-black ">
            <img src={profile.profileImage || banner} alt="" className="w-full h-full rounded-full " />
          </div>
          <p className="text-2xl font-semibold">{profile.name}</p>
          <p className="text-md text-white opacity-70 font-semibold">
            {profile.email}
          </p>
          <div className="flex  gap-2 mt-2 items-center text-md text-white opacity-70 font-semibold">
            <FaCalendarAlt />
            <p>Joined {new Date(profile.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="bg-transparent border-[0.2px] flex flex-col gap-[10px] rounded-xl mt-4 opacity-70 w-[150px] text-white border-opacity-70 h-[100px] justify-center items-center">
            <p className="text-2xl font-bold">{profile.posts.length}</p>
            <p className="text-md font-semibold">Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
