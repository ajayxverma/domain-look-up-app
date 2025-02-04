import express from 'express';
import { getDomainDetail, getIpDetails } from '../controller/lookup.controller.js';
import { validateIp } from '../middleware/ip-validator.middleware.js';
import { validateDomain } from '../middleware/domain-validator.middleware.js';
const lookUp = express.Router();
lookUp.route('/v1/domain-details').get(validateDomain, getDomainDetail);
lookUp.route('/v1/ip-details/:ip').get(validateIp, getIpDetails);
export default lookUp;
