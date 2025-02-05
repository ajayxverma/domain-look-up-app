import validator from 'validator';
export const validateIp = (req, res, next) => {
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
