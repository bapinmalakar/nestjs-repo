import { HttpStatus } from '@nestjs/common';
export class ErrorList {
    public api = 'demo api';
    public List = {
        'internal_error': {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            code: 'iternal_error',
            message: 'Internal Server error',
            api: this.api
        },
        'data_not_found': {
            status: HttpStatus.NOT_FOUND,
            code: 'resource_not_found_error',
            message: 'Data not found',
            api: this.api
        },
        'invalid_path': {
            status: HttpStatus.BAD_GATEWAY,
            code: 'invalid_path_error',
            message: 'Invalid path request',
            api: this.api
        },
        'basic_auth': {
            status: HttpStatus.PRECONDITION_FAILED,
            code: 'request_validation_error',
            message: 'Unknown source',
            api: this.api
        },
        'bad_request': {
            status: HttpStatus.BAD_REQUEST,
            code: 'bad_request_error',
            message: 'required data mismatch',
            api: this.api
        }
    }
}