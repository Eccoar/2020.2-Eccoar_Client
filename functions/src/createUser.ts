import { Request, Response } from 'express';
import admin from './auth';

const ping = async (req: Request, res: Response): Promise<Response> => {
	const ping = { ...req.body };
	admin.firestore().collection('ping').add(ping);
	return res.status(200).json(ping);
};

export default ping;
