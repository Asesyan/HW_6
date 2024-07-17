import express from 'express';
import {
    createPost,
    getPosts,
    getSinglePost,
    updatePost,
    deletePost,
} from '../controllers/postsCont.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
