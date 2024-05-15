// const app = require('./app');
// const port = 3001;
//const host = '127.0.0.1';

// const server = app.listen(port, host, () => {
//   console.log(`node server listening to ${server.address().port}`);
// });

import express from 'express';
//import data from './data.js';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import placeRouter from './routes/placeRoute.js';
import cookieParser from 'cookie-parser';

connectDB(); //connect to MongoDB

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

const port = process.env.PORT || 3001;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api', placeRouter);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
