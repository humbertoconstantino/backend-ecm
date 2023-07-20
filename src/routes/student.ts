import { Router, Request, Response } from "express";
import * as studentController from "../controllers/student-controller";

const studentRouter = Router();

studentRouter.get(":/id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await studentController.getById(id);
  return res.status(200).send(result);
});

studentRouter.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload: any = req.body;

  const result = await studentController.update(id, payload);
  return res.status(201).send(result);
});

studentRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await studentController.deleteById(id);
  return res.status(204).send({
    success: result,
  });
});

studentRouter.post("/", async (req: Request, res: Response) => {
  const payload: any = req.body;
  const result = await studentController.create(payload);
  return res.status(200).send(result);
});

studentRouter.get("/", async (req: Request, res: Response) => {
  if (req.params.user) {
    const user = Number(req.params.user);
    const results = await studentController.getAllOfUser(user);
    return res.status(200).send(results);
  } else {
    const results = await studentController.getAllOfUser();
    return res.status(200).send(results);
  }
});

export default studentRouter;
