import { getDomainDetail } from './lookup.controller.js';
import { getDomainDetails } from '../service/lookup.service.js';
import { Request, Response } from 'express';

jest.mock('../service/lookup.service.js');
jest.mock('../utils/logger.js');

describe('getDomainDetail', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    req = {
      query: {},
    };
    res = {
      status: statusMock,
      json: jsonMock,
    };
  });

  it('should return 400 if domain name is not provided', async () => {
    await getDomainDetail(req as Request, res as Response);
    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({
      response: {
        message: 'Domain name is required',
      },
    });
  });

  it('should return domain details if domain name is provided', async () => {
    const mockDomainDetails = { domain: 'example.com' };
    (getDomainDetails as jest.Mock).mockResolvedValue(mockDomainDetails);
    req.query = { domain: 'example.com' };

    await getDomainDetail(req as Request, res as Response);

    expect(getDomainDetails).toHaveBeenCalledWith('example.com');
    expect(res.json).toHaveBeenCalledWith({
      response: {
        data: mockDomainDetails,
      },
    });
  });
});