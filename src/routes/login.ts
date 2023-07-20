import { Router, Request, Response } from "express";
import * as loginController from "../controllers/login-controller";

const loginRouter = Router();

loginRouter.get(":/id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await loginController.getById(id);
  return res.status(200).send(result);
});

loginRouter.put("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const payload: any = req.body;

  const result = await loginController.update(id, payload);
  return res.status(201).send(result);
});

loginRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await loginController.deleteById(id);
  return res.status(204).send({
    success: result,
  });
});

loginRouter.post("/", async (req: Request, res: Response) => {
  const payload: any = req.body;
  const result = await loginController.create(payload);
  return res.status(200).send(result);
});

loginRouter.get("/", async (req: Request, res: Response) => {
  const results = await loginController.getAll();
  return res.status(200).send(results);
});

loginRouter.post("/auth", async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await loginController.loginUser(payload);
  return res.status(200).send(result);
});

loginRouter.get("/document/:documentNumber", async (req: Request, res: Response) => {
  const documentNumber = req.params.documentNumber;
  const result = await loginController.getByDocumentNumber(documentNumber);
  return res.status(200).send(result);
});

export default loginRouter;
