import { CreateDemoDto } from './dto/demo.dto';
import { Get, Controller, Req, Res, Post, Body, HttpStatus, All, HttpException, UsePipes } from '@nestjs/common';
import { Demo } from './interfaces/demo.interface';
import { DemoService } from './services/demo.service';
import { ResponseSend } from './../Response/response';
import { createError } from '../Response/createError.component';
import { DemoPipe } from './pipes/demo.pipe';

@Controller('demo')

export class DemoController {
    constructor(private _demoService: DemoService, private _responseSend: ResponseSend, private E: createError) { 
    }
    @Get('get')
    findAll( @Req() request, @Res() response) {
        return this._responseSend.ok(response, this._demoService.getData());
    }

    @Post('post')
    async create( @Body(new DemoPipe()) createDemoDto: CreateDemoDto, @Req() request, @Res() response) {
        this._demoService.createData(createDemoDto);
        this._responseSend.ok(response, 'successfully saved');
    }

    @All()
    async notFound( @Req() request, @Res() response) {
        console.log('Inside');
        let error = this.E.create('invalid_path');
        throw new HttpException(error[0], error[1]);
    }
}
