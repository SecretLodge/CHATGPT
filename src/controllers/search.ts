import { Body, Controller, Post } from 'amala'
import google = require('googlethis')
import options from '@/helpers/searchOptions'

@Controller('/search')
export default class SearchController {
  @Post('/query')
  async search(@Body({ required: true }) query: { query: string }) {
    return (await google.search(query.query, options)).results
  }
}
