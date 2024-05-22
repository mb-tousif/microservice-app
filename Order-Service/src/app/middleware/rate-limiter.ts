import rateLimit from "express-rate-limit";

const RateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
});

export default RateLimiter;