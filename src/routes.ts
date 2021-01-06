import { Request, Response, Router } from 'express';

const router = Router();

router.post('/users', (req: Request, res: Response) => {
  res.sendStatus(201);
});

export { router };
