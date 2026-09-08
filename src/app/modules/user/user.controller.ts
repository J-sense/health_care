import { Request, Response } from "express";
import { catchAsync } from "./../../shared/catchyAsync";
import { userService } from "./user.service";
import { sendResponse } from "../../shared/sendRespons";
const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await userService.createDoctor(req.body);
  sendResponse(res, {
    data: result,
    message: "try to create doctor",
    statusCode: 201,
    success: true,
  });
});

export const userController = {
  createDoctor,
};
