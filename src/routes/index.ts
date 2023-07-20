import { Router } from "express";
import loginRouter from "./login";
import schoolRouter from "./school";
import studentRouter from "./student";

const router = Router();

router.use("/login", loginRouter);
router.use("/school", schoolRouter);
router.use("/students", studentRouter);

export default router;
