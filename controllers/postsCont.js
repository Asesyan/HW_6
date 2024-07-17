import { v4 as uuidv4 } from 'uuid';
let posts = [];
export const createPost = (req, res) => {
    const { title, description, userId } = req.body;


    if (!title || !description || !userId) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const newPost = { id: uuidv4(), title, description, userId };
    posts.push(newPost);
    res.status(200).json({ message: 'Post created successfully', post: newPost });
};

export const getPosts = (req, res) => {
    const userId = req.query.userId;
    if (userId) {

        res.send(`User in ID ${userId}`);
    } else {

        res.send('All posts');
    }
};

export const getSinglePost = (req, res) => {
    const { id } = req.params;

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(400).json({ message: 'Post not found' });
    }

    res.json(post);
};

export const updatePost = (req, res) => {
    const { id } = req.params;
    const { title, description, userId } = req.body;

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(400).json({ message: 'Post not found' });
    }

    if (title) {
        post.title = title;
    }
    if (description) {
        post.description = description;
    }
    if (userId) {
        post.userId = userId;
    }

    res.json({ message: 'Post updated successfully', post });
};

export const deletePost = (req, res) => {
    const { id } = req.params;

    const index = posts.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(index, 1);
    res.json({ message: 'Post deleted successfully', postId: id });
};
