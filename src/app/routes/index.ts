import { Router } from "express";
import { SpecialtyRoutes } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.routes";

const router = Router();
router.use("/specialties", SpecialtyRoutes);
router.use("/auth", AuthRoutes);
router.use("/user", userRoutes);

export const IndexRoutes = router;
