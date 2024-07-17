import express from "express";
import authRoutes from './routes/authRoutes.js'
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(3000, () => {
    console.log('Server started in port 3000.')
})