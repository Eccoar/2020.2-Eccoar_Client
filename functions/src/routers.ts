import { Router, Request, Response } from 'express';
import ping from './createUser';

const routers = Router();

routers.post("/ping", (req: Request, res: Response) => {
    ping(req, res);
});

export default routers;
