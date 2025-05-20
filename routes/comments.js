import express from 'express';
import { body } from 'express-validator';
import * as commentController from '../controllers/commentController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get comments for a blog
router.get('/blog/:blogId', commentController.getCommentsByBlogId);

// Add an comment
router.post('/', auth, [
  body('content').trim().isLength({ min: 1 }),
  body('blogId').isMongoId()
], commentController.addComment);

// Delete an comment
router.delete('/:id', auth, commentController.deleteComment);

export default router;