import { Component, HttpStatus } from "@nestjs/common";


@Component()

export class ResponseSend {
    api = 'demo api';
    ok(res, sendData) {
        let data = new Object();
        data['api'] = this.api;
        data['data'] = sendData;
        return res.status(HttpStatus.OK).json(data);
    }
}