const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/BLOG", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose is connected");
    })
    .catch((err) => {
        console.log(err);
    });



//get post by id
exports.getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;

        // Find user by ID and populate the posts array
        const user = await User.findById(userId).populate('posts');
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the posts of the user
        res.status(200).json(user.posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};
