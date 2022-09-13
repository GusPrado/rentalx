import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response) {
    const all = this.listCategoryUseCase.execute();

    return res.json(all);
  }
}

export { ListCategoriesController };
