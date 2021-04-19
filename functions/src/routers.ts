import {Router, Request, Response} from "express";
import {ping, createUser, createAuthUser} from "./createUser";

const routers = Router();

routers.post("/ping", (req: Request, res: Response) => {
  ping(req, res);
});

routers.post("/users", async (req: Request, res: Response) => {
  return await createUser(req, res);
});

routers.post("/users/auth", async (req: Request, res: Response) => {
  return await createAuthUser(req, res);
});

export default routers;
