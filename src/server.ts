import express from 'express';
import { router } from './routes';

const app = express();
const api_port = 3333;

app.use(express.json());

app.use(router);

app.listen(api_port, () => console.log(`Server running on port: ${api_port}`));
