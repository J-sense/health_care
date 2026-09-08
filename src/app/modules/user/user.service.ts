/* eslint-disable @typescript-eslint/no-explicit-any */
import { Role, Specialty } from "../../../generated/prisma";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

const createDoctor = async (payload: any) => {
  const specialties: Specialty[] = [];
  const uniqueSpecialtyIds = [...new Set(payload.specialties)];
  for (const specialtyId of uniqueSpecialtyIds) {
    const specialty = await prisma.specialty.findUnique({
      where: {
        id: specialtyId as string,
      },
    });
    if (!specialty) {
      throw new Error(`specialty with this ${specialtyId} not exist`);
    }
    console.log(specialty);
    specialties.push(specialty);
  }
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.doctor.email,
    },
  });
  console.log(payload.doctor.email);
  if (isUserExist) {
    throw new Error(`User with this ${payload.doctor.email} already exist`);
  }
  const userData = await auth.api.signUpEmail({
    body: {
      email: payload.doctor.email,
      password: payload.password,
      role: Role.DOCTOR,
      needPasswordChange: true,
      name: payload.doctor.name,
    },
  });
  try {
    const result = await prisma.$transaction(async (tx) => {
      const doctorData = await tx.doctor.create({
        data: {
          userId: userData.user.id,
          email: payload.doctor.email,
          gender: payload.doctor.gender,
          name: payload.doctor.name,
        },
      });
      const doctorSpecialtyData = specialties.map((sp) => {
        return {
          doctorId: doctorData.id,
          specialtyId: sp.id,
        };
      });
      await tx.doctorSpecialty.createMany({
        data: doctorSpecialtyData,
      });
      const doctorwithalldata = await tx.doctor.findUnique({
        where: {
          id: doctorData.id,
        },
        include: {
          user: true,
          specialties: {
            include: {
              specialty: true,
              doctor: true,
            },
          },
        },
      });
      return doctorwithalldata;
    });
    return result;
  } catch (error) {
    console.log(error);
    await prisma.user.delete({
      where: {
        id: userData.user.id,
      },
    });
  }
};
export const userService = {
  createDoctor,
};
