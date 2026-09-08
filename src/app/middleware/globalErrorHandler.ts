/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import z from "zod";
import { TErrorResponse, TErrorSources } from "../../interface/error.interface";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorSource: TErrorSources[] = [];
  let statusCode: number = 500;
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
  }
  const errorResponse: TErrorResponse = {
    success: false,
    message: message,
    error: err,
    errorSource,
  };
  res.status(statusCode).json(errorResponse);
};
