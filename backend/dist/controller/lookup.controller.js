import { logger } from '../utils/logger.js';
import { getDomainDetails, getIpAddressDetails } from '../service/lookup.service.js';
export const getDomainDetail = async (req, res) => {
    try {
        const domainName = req.query.domain;
        if (!domainName) {
            res.status(400).json({
                response: {
                    message: 'Domain name is required',
                },
            });
            return;
        }
        const apiResponse = await getDomainDetails(domainName);
        const domainDetails = apiResponse;
        res.json({
            response: {
                data: domainDetails,
            },
        });
    }
    catch (error) {
        logger.error('Error fetching Domain details', { error: error });
        res.status(500).json({
            response: {
                message: 'An error occurred',
                error: error,
            },
        });
    }
};
export const getIpDetails = async (req, res) => {
    try {
        const ipAddress = req.params.ip;
        console.log(ipAddress);
        if (!ipAddress) {
            res.status(400).json({
                response: {
                    message: 'Ip Address is is required',
                },
            });
            return;
        }
        const apiResponse = await getIpAddressDetails(ipAddress);
        const domainDetails = apiResponse;
        res.json({
            response: {
                data: domainDetails,
            },
        });
    }
    catch (error) {
        logger.error('Error fetching ip details', { error: error });
        res.status(500).json({
            response: {
                message: 'An error occurred',
                error: error,
            },
        });
    }
};
