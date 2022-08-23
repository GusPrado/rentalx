import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoriesRepository = new CategoriesRepository();

  categoriesRepository.create({ name, description });

  console.log(categoriesRepository);

  return res.status(201).send();
});

export { categoriesRoutes };
