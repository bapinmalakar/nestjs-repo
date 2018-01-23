import { Module, MiddlewaresConsumer, RequestMethod, Get, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { DemoModule } from './demo/demo.module';
import { ResponseMiddleware } from './app.middleware';
import { DemoController } from './demo/demo.controller';
import { ResponseSend } from './Response/response';
import { createError } from './Response/createError.component';
@Module({
  imports: [DemoModule],
  controllers: [AppController],
  components: [ResponseSend, createError]
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(ResponseMiddleware).forRoutes(
      { path: '*', method: RequestMethod.ALL } // Create application level middleware
    );
  }
}
