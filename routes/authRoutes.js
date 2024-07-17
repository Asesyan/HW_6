import express from "express";
import { registerUser, loginUser} from "../controllers/authCont.js";

const router = express.Router();

router.post('/registration', (req, res) => {
    res.send ('Registration text');
});

router.post('/login', (req, res) => {
    res.send ('Authen. text');
 });

export default router;