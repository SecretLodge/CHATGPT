import { Body, Controller, Post } from 'amala'
import getAnswerGPT, { message } from '@/helpers/getAnswerGPT'

@Controller('/chat')
export default class ChatController {
  @Post('/message')
  async message(@Body({ required: true }) { ...messages }: message[]) {
    return await getAnswerGPT(messages)
  }
}
