//cors options
export const corsOptions = {
  origin: process.env.FE_URL || '*',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};