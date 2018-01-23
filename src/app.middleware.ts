import { Middleware, NestMiddleware, ExpressMiddleware, HttpStatus } from '@nestjs/common';

export const ResponseMiddleware = (req, res, next) => {
    next();
}