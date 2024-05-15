import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  getUserByID,
} from '../controllers/userController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';


router.route('/register').post(registerUser).get(protect, isAdmin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserByID)
  .put(protect, isAdmin, updateUser);

export default router;
