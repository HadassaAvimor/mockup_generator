import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { generateGPTPrompt } from './prompt';
@Controller('api')
export class AiController {
    constructor(private readonly aiService: AiService) { }


    @Post('/generate-mockup')
    async generate_mockup(@Body() body: { userInput: string }) {
        const prompt  = generateGPTPrompt(body.userInput)
        return await this.aiService.generateJsxCode(prompt);
    }

}


