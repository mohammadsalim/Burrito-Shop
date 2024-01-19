import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey && apiKey === process.env.BURRITO_SHOP_API_KEY) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};
