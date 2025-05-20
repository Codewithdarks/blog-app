import express from 'express';
import { body } from 'express-validator';
import * as blogController from '../controllers/blogController.js';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Get single blog
router.get('/:id', blogController.getBlogById);

// Create an blog
router.post('/', auth, upload.single('blogImage'), [
  body('title').trim().isLength({ min: 1 }),
  body('description').trim().isLength({ min: 1 })
], blogController.createBlog);

// Update an blog
router.put('/:id', auth, upload.single('blogImage'), [
  body('title').trim().isLength({ min: 1 }),
  body('description').trim().isLength({ min: 1 })
], blogController.updateBlog);

// Delete an blog
router.delete('/:id', auth, blogController.deleteBlog);

export default router;