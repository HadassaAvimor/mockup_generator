import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService) { }


    @Post('process-input')
    async processInput(@Body() body: { userInput: string }) {
        return await this.aiService.generateJsxCode(body.userInput);
    }

}

