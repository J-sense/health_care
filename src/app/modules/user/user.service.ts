import { Specialty } from "../../../generated/prisma";
import { prisma } from "../../lib/prisma";

const createDoctor = async (payload) => {
  const specialties: Specialty[] = [];
  for (const specialtyId of payload.specialties) {
    const specialty = await prisma.specialty.findUnique({
      where: {
        id: specialtyId,
      },
    });
    if (!specialty) {
      throw new Error(`specialty with this ${specialtyId} not exist`);
    }
  }
  return specialties;
};
export const userService = {
  createDoctor,
};
