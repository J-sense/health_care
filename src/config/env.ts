import dotenv from "dotenv";
import { AppError } from "../app/errorHelpers/AppError";

dotenv.config();
interface EnvConfig {
  DATABASE_URL: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  PORT: string;
}
const loadEnvConfig = (): EnvConfig => {
  const requiredEnvVars = [
    "DATABASE_URL",
    "BETTER_AUTH_SECRET",
    "BETTER_AUTH_URL",
    "PORT",
  ];
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new AppError(
        404,
        `Environment variable ${envVar} is not set please set in .env file`,
      );
    }
  }
  return {
    DATABASE_URL: process.env.DATABASE_URL as string,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
    PORT: process.env.PORT as string,
  };
};
export const envVars = loadEnvConfig();
