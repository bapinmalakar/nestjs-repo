import { ErrorList } from './../Response/errorList.list';
import { Component } from '@nestjs/common';

@Component()

export class createError extends ErrorList {

    constructor() {
        super();
    }

    create(code: any = 'internal_error', message: any = null) {
        let error = this.List[code];
        if (!message)
            return [error, error.status];
        else{
            error.message = message;
            return [error, error.status];
        }
    }
}