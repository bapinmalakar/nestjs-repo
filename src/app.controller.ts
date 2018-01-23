import { createError } from './Response/createError.component';
import { Get, Controller, Res, All, HttpException } from '@nestjs/common';
import { ResponseSend } from './Response/response';

@Controller()
export class AppController {
  constructor(private _responseSend: ResponseSend, private E: createError) { }
  @Get()
  root( @Res() res): any {
    return this._responseSend.ok(res, 'Demo application using NEST.js');
  }

  // @All('/*')
  // notFound( @Res() res): any {
  //   console.log('Here');
  //   let error = this.E.create('invalid_path');
  //   throw new HttpException(error[0], error[1]);
  // }
}
