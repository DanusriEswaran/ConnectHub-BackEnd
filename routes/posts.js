// routes/posts.js

import express from 'express';
import { getPosts, addPost, deletePost } from '../controllers/post.js';

const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Add a new post
router.post('/', addPost);

// Delete a post by ID
router.delete('/:id', deletePost);

export default router;
