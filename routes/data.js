import {Router} from "express";
import { getBranches, getSubjects } from "../controller/dataController.js";

const dataRouter = Router();
dataRouter.get('/branches',getBranches);

dataRouter.get('/subjects/:dep',getSubjects)
export default dataRouter;