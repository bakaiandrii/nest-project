import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller('/api')
export class AppContoller {

    constructor(private appService: AppService){

    }

    @Get('/users')
    getUsers(){
        return this.appService.getUsers()
    }
}