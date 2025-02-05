import validator from 'validator';
export const validateDomain = (req, res, next) => {
    const domain = req.query.domain;
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
