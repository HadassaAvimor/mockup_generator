import { Injectable } from '@nestjs/common';
import {Configuration, OpenAIApi} from 'openai';
@Injectable()
export class AiService {
    private openai;

    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        this.openai = new OpenAIApi(configuration);
    }

    async generateJsxCode(userInput: string): Promise<string> {
        const response = await this.openai.createCompletion({
            model: 'text-davinci-003', 
            prompt: userInput,
            max_tokens: 150,
        });
        return response.data.choices[0].text.trim();
    }
}
