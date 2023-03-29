import { Body, Controller, Post } from 'amala'
import getSearchResult from '@/helpers/getSearchResult'

@Controller('/search')
export default class ChatController {
  @Post('/query')
  async search(@Body({ required: true }) query: { query: string }) {
    return await getSearchResult(query)
  }
}
