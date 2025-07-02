import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from './routes/postRouter.js';
import userRouter from './routes/userRouter.js';    
import {connect} from './prismaClient.js';

dotenv.config();

const app = express();  
app.use(cors());
app.use(express.json());
app.use('/api', postRouter);
app.use('/api', userRouter);

connect();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
