const express = require('express');
const { signup, login, createPost, getUserPosts, getAllPosts, dislikePost, likePost, getAllByMusic, getAllBySports, editPost, getUserProfile } = require('../Controllers/controller');
const router = express.Router();
const { upload } = require('../Middleware/cloud');

// router.post('/signup', signup);
router.post('/signup', upload.single('profileImage'), signup);
router.post('/login', login);
router.post('/createPost',upload.single('postImage'), createPost);
router.get('/user/:userId/posts', getUserPosts);
router.get('/getAllPost', getAllPosts);

router.put('/post/:postId/like', likePost); 
router.put('/post/:postId/dislike', dislikePost);

router.put('/post/:postId', upload.single('postImage'), editPost);

//cat
router.get('/music', getAllByMusic);
router.get('/sports', getAllBySports);

//profile
router.get('/profile/:userId', getUserProfile);




module.exports = router;
