import { Middleware, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { ExpressMiddleware } from '@nestjs/common/interfaces';
import { createError } from '../Response/createError.component';

@Middleware()
export class DemoMiddleware implements NestMiddleware {
    constructor(private E: createError) { }
    resolve(...args: any[]): ExpressMiddleware {
        return (req, res, next) => {
            if (req.headers.headerdata) {
                next();
            } else {
                let error = this.E.create('basic_auth');
                throw new HttpException(error[0], error[1]);
            }
        }
    }
}