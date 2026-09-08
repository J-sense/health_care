import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const result = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return result;
};
const getSingleDoctors = async (id: string) => {
  const result = await prisma.doctor.findUnique({
    where: {
      id: id as string,
    },
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return result;
};
const deleteSingleDoctorSoftly = async (id: string) => {
  const result = await prisma.doctor.update({
    where: {
      id: id,
    },
    data: {
      isDeleted: true,
    },
  });
  return result;
};
export const doctorService = {
  getAllDoctors,
  getSingleDoctors,
  deleteSingleDoctorSoftly,
};
