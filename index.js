import express from "express";
import cors from "cors";
import productsRouter from "./routers/products.routes.js";

const app = express();
global.ENV = process.env;
const PORT = ENV.PORT;
app.use(cors());

app.use(express.json());

app.use("/api", productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})


