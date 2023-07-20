import { Router, Request, Response } from "express";
import * as schoolController from "../controllers/school-controller";

const schoolRouter = Router();

schoolRouter.get(":/id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await schoolController.getById(id);
  return res.status(200).send(result);
});

schoolRouter.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload: any = req.body;

  const result = await schoolController.update(id, payload);
  return res.status(201).send(result);
});

schoolRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await schoolController.deleteById(id);
  return res.status(204).send({
    success: result,
  });
});

schoolRouter.post("/", async (req: Request, res: Response) => {
  const payload: any = req.body;
  const result = await schoolController.create(payload);
  return res.status(200).send(result);
});

schoolRouter.get("/", async (req: Request, res: Response) => {
  const results = await schoolController.getAll();
  return res.status(200).send(results);
});

export default schoolRouter;
