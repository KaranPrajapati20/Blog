const userModel = require('../Models/userModel');
const postModel = require('../Models/userPost'); // Corrected import name
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { uploadOnCloudinary } = require('../Middleware/cloudinary');

// exports.signup = async (req, res) => {
//     try {
//         const { name, dob, phone, email, password } = req.body;
//         const profileImageLocalPath = req.file?.path;
//         const postImage = await uploadOnCloudinary(profileImageLocalPath);

//         if (!(name && dob && phone && email && password)) {
//             return res.status(400).send("All fields are required");
//         }

//         const existingUser = await userModel.findOne({ email });

//         if (existingUser) {
//             return res.status(401).send("User already exists");
//         }

//         const myEncPassword = await bcrypt.hash(password, 10);

//         const user = await userModel.create({ name, dob, phone, profileImage : postImage, email, password: myEncPassword });

//         const token = jwt.sign(
//             { id: user._id, email },
//             process.env.JWT_SECRET || 'shhhh',
//             { expiresIn: "1m" }
//         );

//         res.status(200).cookie('token', token, { httpOnly: true }).json({ user, token });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");
//     }
// };

exports.signup = async (req, res) => {
    try {
        const { name, dob, phone, email, password } = req.body;
        const profileImageLocalPath = req.file?.path;

        if (!(name && dob && phone && email && password)) {
            return res.status(400).send("All fields are required");
        }

        const profileImage = await uploadOnCloudinary(profileImageLocalPath);

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(401).send("User already exists");
        }

        const myEncPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            dob,
            phone,
            profileImage: profileImage,
            email,
            password: myEncPassword
        });

        const token = jwt.sign(
            { id: user._id, email },
            process.env.JWT_SECRET || 'shhhh',
            { expiresIn: "1m" }
        );

        res.status(200).cookie('token', token, { httpOnly: true }).json({ user, token });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send("All fields are required");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid credentials");
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || 'shhhh',
            { expiresIn: "1m" }
        );

        res.status(200).cookie('token', token, { httpOnly: true }).json({
            success: true,
            token,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

exports.createPost = async (req, res) => {
    try {
        const { user, title, desc, image, cat } = req.body;
        const profileImageLocalPath = req.file?.path;
        const postImage = await uploadOnCloudinary(profileImageLocalPath);

        const user1 = await userModel.findById(user);
        if (!user1) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newPost = new postModel({
            title,
            desc,
            image : postImage,
            name: user1.name,
            cat, // Adding cat field
            user: user1._id
        });

        await newPost.save();

        user1.posts.push(newPost._id);
        await user1.save();

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

exports.getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await userModel.findById(userId).populate('posts');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user.posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate('user');
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

exports.likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await postModel.findById(postId);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.likes += 1;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.dislikePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await postModel.findById(postId);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.dislikes += 1;
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



//music

exports.getAllByMusic = async (req, res) => {
    try {
        const posts = await postModel.find({ cat: "music" }).populate('user');

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
exports.getAllBySports = async (req, res) => {
    try {
        const posts = await postModel.find({ cat: "sports" }).populate('user');

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};



//edit post
// exports.editPost = async (req, res) => {
//     try {
//         const { postId } = req.params;
//         const { title, desc, image, cat } = req.body;

//         console.log(`Editing post with ID: ${postId}`);  // Log the postId
//         console.log(`New data:`, req.body);  // Log the new data

//         const post = await postModel.findById(postId);
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }

//         // Update the post fields with the new values if provided
//         if (title) post.title = title;
//         if (desc) post.desc = desc;
//         if (image) post.image = image;
//         if (cat) post.cat = cat;

//         await post.save();

//         console.log(`Post updated:`, post);  // Log the updated post

//         res.status(200).json(post);
//     } catch (error) {
//         console.error(error);  // Log the error
//         res.status(500).json({ message: error.message });
//     }
// };


exports.editPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { title, desc, cat } = req.body;
        let postImage = null;

        
        if (req.file) {
            const profileImageLocalPath = req.file.path;
            postImage = await uploadOnCloudinary(profileImageLocalPath);
        }

        // console.log(`Editing post with ID: ${postId}`);
        // console.log(`New data:`, req.body);
        // console.log(postImage);

        const post = await postModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Update the post fields with the new values if provided
        if (title) post.title = title;
        if (desc) post.desc = desc;
        if (postImage) post.image = postImage; // Update image URL from Cloudinary
        if (cat) post.cat = cat;

        await post.save();

        // console.log(`Post updated:`, post);

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


//prifile
exports.getUserProfile = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await userModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      res.status(500).json({ message: 'Failed to fetch user profile. Please try again later.' });
    }
  };



