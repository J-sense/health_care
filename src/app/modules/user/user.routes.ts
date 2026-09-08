import { valiDateRequest } from "../../middleware/ValidateRequest";
import { userController } from "./user.controller";
import { createDoctorSchema } from "./user.schema";

import { Router } from "express";
const router = Router();

router.post(
  "/create-doctor",
  valiDateRequest(createDoctorSchema),
  userController.createDoctor,
);
export const userRoutes = router;
