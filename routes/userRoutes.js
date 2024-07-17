import express from 'express';
import {
    getUsersList,
    getUserProfile,
    updateUserProfile,
    deleteUser,
} from '../controllers/usersCont.js';
const router = express.Router();


router.get('/', getUsersList);
router.get('/:id', getUserProfile);
router.put('/:id', updateUserProfile);
router.delete('/:id', deleteUser);

export default router;
