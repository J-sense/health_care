import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchyAsync";
import { SpecialtyService } from "./speciality.service";
import { sendResponse } from "../../shared/sendRespons";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.createSpecialty(req.body);
  sendResponse(res, {
    success: true,
    message: "Specialty created successfully",
    statusCode: 201,
    data: result,
  });
});
const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.updateSpecialty(
    req.params.id as string,
    req.body,
  );
  sendResponse(res, {
    success: true,
    message: "Specialty updated successfully",
    statusCode: 200,
    data: result,
  });
});
const getSpecialties = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.getSpecialties();
  sendResponse(res, {
    success: true,
    message: "Specialties retrieved successfully",
    statusCode: 200,
    data: result,
  });
});
const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialtyService.deleteSpecialty(
    req.params.id as string,
  );
  sendResponse(res, {
    success: true,
    message: "Specialty deleted successfully",
    statusCode: 200,
    data: result,
  });
});

export const SpecialtyController = {
  createSpecialty,
  updateSpecialty,
  getSpecialties,
  deleteSpecialty,
};
