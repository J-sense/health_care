import { Prisma, Specialty } from "../../../generated/prisma";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (
  payload: Prisma.SpecialtyCreateInput,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: payload,
  });
  return specialty;
};
const updateSpecialty = async (
  id: string,
  payload: Prisma.SpecialtyUpdateInput,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.update({
    where: { id },
    data: payload,
  });
  return specialty;
};
const getSpecialties = async (): Promise<Specialty[]> => {
  const specialties = await prisma.specialty.findMany();
  return specialties;
};
const deleteSpecialty = async (id: string): Promise<Specialty> => {
  const specialty = await prisma.specialty.delete({
    where: { id },
  });
  return specialty;
};
export const SpecialtyService = {
  createSpecialty,
  updateSpecialty,
  getSpecialties,
  deleteSpecialty,
};
