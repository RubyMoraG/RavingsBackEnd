import express from 'express';
import {
    getAllPosts,
    createPost
} from '../controllers/postController.js';

const router = express.Router();   

router.get('/posts', getAllPosts);
router.post('/posts', createPost);

export default router;