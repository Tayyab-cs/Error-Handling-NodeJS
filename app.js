import express from "express";
const app = express();

import { errorHandler } from "./middlewares/errorHandling.js";
import { errorObject } from "./utils/errorObject.js";

// Testing API...
app.get("/test", (req, res, next) => {
  try {
    const x = 1;
    if (x === 1) throw errorObject("Condition not Satisfied", "badRequest");
    res.send(`Hello App......`);
  } catch (error) {
    return next(error);
  }
});

// Error Handling Middleware used...
app.use(errorHandler);

// Listening PORT...
app.listen("3001", () => {
  console.log(`Server is Running on PORT: 3001...`);
});
