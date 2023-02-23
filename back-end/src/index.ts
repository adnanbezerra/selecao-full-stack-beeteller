import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/ErrorHandler';

const server = express();
server.use(cors());
server.use(express.json());

// routes
// server.use();
server.use(errorHandler);

export default server;
