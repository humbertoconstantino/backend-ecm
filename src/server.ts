import express from "express";
import * as bodyParser from "body-parser";
import * as jwt from "jsonwebtoken";
import cors from "cors";
import routes from "./routes/index";
import dbInit from './db/init';

dbInit();

const app = express();

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next: () => void
) {
  console.log(`${request.method} ${request.path}`);
  next();
}

function verifyLogin(
  request: any,
  response: express.Response,
  next: () => void
) {
  if (request.originalUrl === '/api/login/auth') {
    next();
  } else {
    const token = request.headers["x-access-token"] || request.body.token;
    if (!token) {
      return response.status(401).json({ auth: false, message: "no token" });
    }
    jwt.verify(token, process.env.SECRET || '232323', function (err: any, decoded: any) {
      if (err) {
        return response
          .status(500)
          .json({ auth: false, message: "failed to authenticate token" });
      }
      request.userId = decoded.id;
      next();
    });
  }
}

const port = process.env.PORT || 3333;

app.use(cors());
app.use(loggerMiddleware);
app.use(bodyParser.json());

app.use("/api", verifyLogin, routes);

app.post("/", verifyLogin, (request, response) => {
  response.send(request.body);
});

app.listen(port, () => `server started on port: ${port}`);
