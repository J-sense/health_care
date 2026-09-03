import { Response } from "express";
interface IResponseData<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
}
export const sendResponse = <T>(
  res: Response,
  responseData: IResponseData<T>,
) => {
  res.status(responseData.statusCode).json({
    success: responseData.success,
    message: responseData.message,
    data: responseData.data,
  });
};
