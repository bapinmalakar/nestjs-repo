import { Pipe, PipeTransform, ArgumentMetadata, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ErrorList } from './../../Response/errorList.list';

@Pipe()

export class DemoPipe extends ErrorList implements PipeTransform<any>{
    private E: any;
    constructor() {
        super();
    }
    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            let e = this.List['bad_request'];
            throw new HttpException(e, e.status);
        }
        return value;
    }
    private toValidate(metatype): boolean {
        const types = [String, Boolean, Number, Array, Object];
        let typ = types.find((type) => metatype === type);
        console.log(typ);
        return !typ ? true : false;
    }
}