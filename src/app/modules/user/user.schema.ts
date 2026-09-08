import z from "zod";

const doctorSchema = z.object({
  name: z.string().trim().min(1, "Doctor name is required"),
  email: z.email("A valid doctor email is required"),
  gender: z.enum(["MALE", "FEMALE"]),
  profilePhoto: z.string().trim().optional(),
  contactNumber: z.string().trim().optional(),
  address: z.string().trim().optional(),
  registrationNumber: z.string().trim().optional(),
  experience: z.number().int().nonnegative().optional(),
  currentWorkingPlace: z.string().trim().optional(),
  designation: z.string().trim().optional(),
});

export const createDoctorSchema = z.object({
  doctor: doctorSchema,
  password: z.string().min(8, "Password must be at least 8 characters"),
  specialties: z
    .array(z.string().trim().min(1, "Specialty ID is required"))
    .min(1, "At least one specialty is required"),
});
export const updateDoctorSchema = z.object().partial();
