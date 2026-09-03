import { Router } from "express";
import { SpecialtyController } from "./speciality.controller";

const router = Router();
router.post("/", SpecialtyController.createSpecialty);
router.put("/:id", SpecialtyController.updateSpecialty);
router.get("/", SpecialtyController.getSpecialties);
router.delete("/:id", SpecialtyController.deleteSpecialty);
export const SpecialtyRoutes = router;
