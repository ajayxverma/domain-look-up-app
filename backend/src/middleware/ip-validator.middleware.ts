import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

export const validateIp = (req: Request, res: Response, next: NextFunction): void => {
  const ipAddress = req.params.ip;
  if (!validator.isIP(ipAddress)) {
    res.status(400).json({
      response: {
        message: 'Invalid IP address',
      },
    });
    return;
  }
  next();
};