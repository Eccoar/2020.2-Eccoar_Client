import {Request, Response} from "express";
import admin from "./auth";

export const ping = async (req: Request, res: Response): Promise<Response> => {
  const ping = {...req.body};
  admin.firestore().collection("ping").add(ping);
  return res.status(200).json(ping);
};

export const createAuthUser = async (req: Request, res: Response):
  Promise<Response | void> => {
  admin
      .auth()
      .createUser({
        email: req.body.email,
        password: req.body.password,
        displayName: `${req.body.name} ${req.body.lastName}`,
      }).then((userRecord) => {
        res.status(201).json(userRecord);
      }).catch((err) => {
        res.status(400).json({err: err.message});
      });
};

export const createUser = async (req: Request, res: Response):
  Promise<Response | void> => {
  try {
    const user = {...req.body};
    const resp = await admin.firestore().collection("users").add(user);
    return res.status(201).json(resp.id);
  } catch (err) {
    return res.status(400).json({"err": err.message});
  }
};
