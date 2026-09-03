import { UserStatus } from "../../../generated/prisma";
import { auth } from "../../lib/auth";

const registerPatient = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  if (!data.user) {
    throw new Error("User registration failed");
  }
  return data;
};
const loginUser = async (payload: { email: string; password: string }) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  if (
    data.user.status === UserStatus.BLOCKED ||
    data.user.status === UserStatus.DELETED
  ) {
    throw new Error("User is not allowed to login");
  }
  return data;
};
export const authService = {
  registerPatient,
  loginUser,
};
