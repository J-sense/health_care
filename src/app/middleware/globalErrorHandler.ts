import { NextFunction, Request, Response } from "express";
import z from "zod";
import { AppError } from "../errorHelpers/AppError";
import { TErrorResponse, TErrorSources } from "../../interface/error.interface";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  void req;
  void next;
  const errorSource: TErrorSources[] = [];
  let statusCode = 500;
  let message = "Internal Server Error";
  if (err instanceof z.ZodError) {
    statusCode = 400;
    message = "Zod Validation Error";
    err.issues.forEach((issue) => {
      errorSource.push({
        path: issue.path.join(" =>"),
        message: issue.message,
      });
    });
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }
  const errorResponse: TErrorResponse = {
    success: false,
    message: message,
    error: statusCode === 500 ? "Internal Server Error" : message,
    errorSource,
  };
  res.status(statusCode).json(errorResponse);
};
