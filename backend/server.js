import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import irouter from './routes/itemRoutes.js';
import inquiryrouter from './routes/inquiryRouters.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import recordrouter from './routes/recordRoutes.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(cors());
app.use(cookieParser());

//middleware
app.use('/api/users', userRoutes);
app.use('/api/admin/equipments', irouter);
app.use('/api/records', recordrouter);
app.use('/api/inquiry', inquiryrouter);



app.get('/', (req, res) => res.send('Server is ready!!!'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
