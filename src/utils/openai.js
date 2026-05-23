import OpenAI from 'openai';
import { genAi } from './constants';

const openai = new OpenAI({
  apiKey: genAi ,// This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
