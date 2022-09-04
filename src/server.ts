import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();
const api_port = 3333;

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(api_port, () => console.log(`Server running on port: ${api_port}`));
