import { ResponseSend } from './../Response/response';
import { Module, RequestMethod, Get } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './services/demo.service';
import { DemoMiddleware } from './demo.middleware';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';
import { createError } from '../Response/createError.component';

@Module({
    imports: [],
    controllers: [DemoController],
    components: [DemoService, ResponseSend, createError]
})

export class DemoModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(DemoMiddleware).forRoutes(
            { path: '/demo/get', method: RequestMethod.GET },
            { path: '/demo/post', method: RequestMethod.POST });
    }
}

