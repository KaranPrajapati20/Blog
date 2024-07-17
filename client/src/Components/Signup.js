// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import bg from "../assets/bg.jpg";
// import { FaUserAlt } from "react-icons/fa";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     dob: "",
//     phone: "",
//     email: "",
//     password: "",
//     profileImage: null, // Add profileImage to formData state
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, profileImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (const key in formData) {
//       data.append(key, formData[key]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3003/api/v1/user/signup",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//       // Store the userId in localStorage
//       localStorage.setItem("userId", response.data.user._id);
//       navigate("/home"); // Redirect to home page after successful signup
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   const handleButtonClick = () => {
//     document.getElementById('fileInput').click();
//   };

//   return (
//     // <div>
//     //     <h2>Signup</h2>
//     //     <form onSubmit={handleSubmit}>
//     //         <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//     //         <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
//     //         <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
//     //         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//     //         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//     //         <input type="file" name="profileImage" onChange={handleFileChange} /> {/* File input */}
//     //         <button type="submit">Signup</button>
//     //     </form>
//     // </div>

//     <div>
//       <div className="w-screen h-screen relative text-white flex justify-center items-center ">
//         {/* <div className="absolute z-10">karan</div> */}
//         <div className="h-[500px] w-[500px] bg-black flex-col  p-6 absolute z-10 items-center border-2 bg-opacity-20 rounded-xl border-[#1D9BF0] md:right-[10%]  " >
//             <p className="w-full text-2xl" >Signup</p>
//             <form className="" onSubmit={handleSubmit }>
//                 <p className="text-[14px] text-slate-500 mt-4 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quis ratione vitae numquam. Sit laborum libero </p>
//                 <div className="flex gap-8 items-center w-full " >
//                 <div className="mt-4 ml-2 opacity-30 text-xl" ><FaUserAlt /></div><input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2 " type="text" name="phone"  placeholder="Enter your name" onChange={handleChange} />
//                 </div>

//                 <div className="flex" >
//                     <div className="flex gap-8 items-center " >
//                         <div className="mt-4 ml-2 opacity-30 text-xl" ><FaUserAlt /></div><input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2 " type="text" name="phone"  placeholder="Enter your name" onChange={handleChange} />
//                     </div>
//                     <div className="flex gap-8 items-center " >
//                         <div className="mt-4 ml-2 opacity-30 text-xl" ><FaUserAlt /></div><input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2 " type="text" name="phone"  placeholder="Enter your name" onChange={handleChange} />
//                     </div>
//                 </div>

//                 <div className="flex gap-8 items-center w-full " >
//                 <div className="mt-4 ml-2 opacity-30 text-xl" ><FaUserAlt /></div><input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2 " type="text" name="phone"  placeholder="Enter your name" onChange={handleChange} />
//                 </div>
//                 <div className="flex gap-8 items-center w-full " >
//                 <div className="mt-4 ml-2 opacity-30 text-xl" ><FaUserAlt /></div><input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2 " type="text" name="phone"  placeholder="Enter your name" onChange={handleChange} />
//                 </div>

//                  <div>
//                     <input
//                         type="file"
//                         id="fileInput"
//                         name="profileImage"
//                         onChange={handleFileChange}
//                         className="hidden"
//                     />
//                     <button
//                         type="button"
//                         onClick={handleButtonClick}
//                         className=" mt-4 border-[#2F3336] border-[0.2px] text-white py-2 px-4 rounded"
//                     >
//                         Choose Profile
//                     </button>
//                 </div>


//                 <button type="submit" className="w-full p-4 bg-[#1D9BF0] mt-4 rounded hover:opacity-85 tracking-wider">Signup</button>


//            </form>
//         </div>
//         <img className="relative h-full w-full flex" src={bg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Signup;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bg from "../assets/bg.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa"; 
import { FaBirthdayCake } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submit starts
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3003/api/v1/user/signup",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      localStorage.setItem("userId", response.data.user._id);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  const navi = () => {
    navigate("/login");
  }

  return (
    <div>
      <div className="w-screen h-screen relative text-white flex justify-center items-center">
        <div className=" w-[500px] bg-black flex-col p-6 absolute z-10 items-center border-2 bg-opacity-20 rounded-xl border-[#1D9BF0] md:right-[10%]">
          <p className="w-full text-2xl">Signup</p>
          <form className="" onSubmit={handleSubmit}>
            <p className="text-[14px] text-slate-500 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quis ratione vitae numquam. Sit laborum libero
            </p>
            <div className="flex gap-8 items-center w-full">
              <div className="mt-4 ml-2 opacity-30 text-xl"><FaUserAlt /></div>
              <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
            </div>
            <div className="flex">
              <div className="flex gap-8 items-center">
                <div className="mt-4 ml-2 opacity-30 text-xl"><FaBirthdayCake /></div>
                <input className="bg-transparent border-[#2F3336] border-b-[0.2px] opacity-60 rounded-md w-[90%] mt-4 p-2" type="date" name="dob" placeholder="Enter your date of birth" onChange={handleChange} />
              </div>
              <div className="flex gap-8 items-center">
                <div className="mt-4 ml-2 opacity-30 text-xl"><FaMobile /></div>
                <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="text" name="phone" placeholder="Enter phone no." onChange={handleChange} />
              </div>
            </div>
            <div className="flex gap-8 items-center w-full">
              <div className="mt-4 ml-2 opacity-30 text-xl"><MdEmail /></div>
              <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </div>
            <div className="flex gap-8 items-center w-full">
              <div className="mt-4 ml-2 opacity-30 text-xl"><RiLockPasswordFill /></div>
              <input className="bg-transparent border-[#2F3336] border-b-[0.2px] rounded-md w-[90%] mt-4 p-2" type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </div>
            <div>
              <input
                type="file"
                id="fileInput"
                name="profileImage"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={handleButtonClick}
                className="mt-4 border-[#2F3336] border-[0.2px] opacity-80 text-white py-2 px-4 rounded"
              >
                Choose Profile
              </button>
            </div>
            <button type="submit" className="w-full p-4 bg-[#1D9BF0] mt-4 rounded hover:opacity-85 tracking-wider" disabled={loading}>
              {loading ? <FaSpinner className="animate-spin ml-[50%] " /> : "Signup"}
            </button>
            <p className="text-[14px] opacity-50 ml-[100px] mt-2 cursor-pointer hover:opacity-100 " onClick={navi} >Already have account? want to login</p>
          </form>
        </div>
        <img className="relative h-full w-full flex" src={bg} alt="" />
      </div>
    </div>
  );
};

export default Signup;

