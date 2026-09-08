import { Router } from "express";
import { SpecialtyRoutes } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.routes";
import { doctorRoutes } from "../modules/doctor/doctor.route";

const router = Router();
router.use("/specialties", SpecialtyRoutes);
router.use("/auth", AuthRoutes);
router.use("/user", userRoutes);
router.use("/user", doctorRoutes);

export const IndexRoutes = router;
