import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

import routers from "./routers";

const app = express();
app.use(express.json());
app.use(cors({origin: true}));
app.use(routers);

export const api = functions.https.onRequest(app);
