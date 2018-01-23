import { Component } from '@nestjs/common';
import { Demo } from './../interfaces/demo.interface';

@Component()

export class DemoService {
    private demoData: Demo[] = [];

    createData(data: Demo) {
        this.demoData.push(data);
    }

    getData(): Demo[] {
        return this.demoData;
    }
}