import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    cat: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('desc', formData.desc);
    formDataToSend.append('cat', formData.cat);
    formDataToSend.append('user', userId);
    if (formData.image) {
      formDataToSend.append('postImage', formData.image);
    }

    try {
      const response = await axios.post('http://localhost:3003/api/v1/user/createPost', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center text-white fixed w-[50%] h-[50px] border-[0.1px] border-b-[#2F3336] border-[#2F3336] z-10 bg-black bg-opacity-80">
        <div className="ml-[20%] font-bold cursor-pointer mt-4 text-white w-fit h-fit border-b-4 rounded border-b-[#1D9BF0]">
          <p className="pb-2 text-white text-opacity-90">Blogs</p>
        </div>
      </div>
      <div className="bg-black text-white z-0 p-4 border-x-[0.1px] border-[#2F3336] flex h-screen w-full">
        <div className="mt-[55px] w-full">
          <h1 className="text-xl border-b-1 text-[#1D9BF0] ">What's you explore?</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-full">
            <div className="xl:flex">
              <div className="flex gap-6 items-center">
                <label className="text-[18px] tracking-wider">Title</label>
                <input
                  className="bg-transparent border-[0.2px] opacity-70 rounded-xl p-2 w-[260px]"
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-6 mt-4 xl:mt-0 items-center ml-6">
                <label className="text-[18px] tracking-wider">Category</label>
                <input
                  className="bg-transparent border-[0.2px] opacity-70 rounded-xl p-2 w-[200px]"
                  type="text"
                  name="cat"
                  placeholder="Category"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <label className="text-[18px] tracking-wider mt-[-60px]">Description</label>
              <textarea
                className="bg-transparent border-[0.2px] opacity-70 rounded-xl p-2 w-[600px] h-[100px]"
                name="desc"
                placeholder="Description"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center opacity-70 mt-4 justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                {previewImage ? (
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4  text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2  text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                )}
                <input id="dropzone-file" type="file" name="image" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 p-4 font-semibold bg-[#1D9BF0] w-full rounded-md hover:bg-opacity-80 border-[#1D9BF0] border-[1px]"
              disabled={loading}
            >
              {loading ? 'Posting...' : 'Post blog'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
