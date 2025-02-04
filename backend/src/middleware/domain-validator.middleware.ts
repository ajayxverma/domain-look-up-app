import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

export const validateDomain = (req: Request, res: Response, next: NextFunction): void => {
  const domain = req.query.domain as string;
  console.log(domain);
  if (!domain || !validator.isFQDN(domain)) {
    res.status(400).json({
      response: {
        message: 'Invalid domain name',
      },
    });
    return;
  }
  next();
};
