// IMPORTS
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { connectDB } from "./config/connect";
import clientRoutes from "./routes/client.routes";
import generalRoutes from "./routes/generals.routes";
import managementRoutes from "./routes/management.routes";
import salesRoutes from "./routes/sales.routes";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Server Alive" });
});
app.use("/client", clientRoutes);
app.use("/generals", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// INVOCATIONS
const start = async () => {
  const port = process.env.PORT || 5001;
  try {
    await connectDB(process.env.MONGO_URL as string);
    app.listen(port, () => {
      console.log(`DB ESTABLISHED_ALIVE @: ${port}`);
    });
  } catch (error) {}
};

start();
