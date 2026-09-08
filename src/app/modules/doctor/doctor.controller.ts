import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchyAsync";
import { sendResponse } from "../../shared/sendRespons";
import { doctorService } from "./doctor.service";

const getAllDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.getAllDoctors();
  sendResponse(res, {
    success: true,
    message: "All Doctors Retrived successfully",
    data: result,
    statusCode: 201,
  });
});
const getSingleDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await doctorService.getSingleDoctors(req.params.id as string);
  sendResponse(res, {
    success: true,
    message: "Single Doctor retrive successfully",
    data: result,
    statusCode: 201,
  });
});
export const doctorController = {
  getAllDoctor,
  getSingleDoctor,
};
