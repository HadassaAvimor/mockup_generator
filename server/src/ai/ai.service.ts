import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AiService {
    private openai: OpenAI;

    constructor() {
        this.openai = new OpenAI({apiKey:"OPENAI_API_KEY"});
    }

    async generateJsxCode(userInput: string): Promise<string> {
        try {
            const response = await this.openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: userInput,
                max_tokens: 150,
            });

            if (response && response.choices && response.choices.length > 0) {
                return response.choices[0].text.trim();
            } else {
                throw new Error('No response from OpenAI');
            }
        } catch (error) {
            console.error('Error generating JSX code:', error);
            throw error;
        }
    }
}

