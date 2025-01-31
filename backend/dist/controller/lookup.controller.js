import { logger } from '../utils/logger.utils.js';
import { getDomainDetails } from '../service/lookup.service.js';
export const getUserList = async (req, res) => {
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
        logger.error('Error fetching user list', { error: error });
        res.status(500).json({
            response: {
                message: 'An error occurred',
                error: error,
            },
        });
    }
};
