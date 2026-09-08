import { Router } from "express";
import { doctorController } from "./doctor.controller";

const router = Router();
router.get("/doctor", doctorController.getAllDoctor);
router.get("/doctor/:id", doctorController.getSingleDoctor);
export const doctorRoutes = router;
