import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchyAsync";
import { authService } from "./auth.service";
import { sendResponse } from "../../shared/sendRespons";

const registerPatient = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await authService.registerPatient(payload);
  sendResponse(res, {
    success: true,
    message: "Patient registered successfully",
    statusCode: 201,
    data: result,
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await authService.loginUser(payload);
  sendResponse(res, {
    success: true,
    message: "User logged in successfully",
    statusCode: 200,
    data: result,
  });
});
export const AuthController = {
  registerPatient,
  loginUser,
};
