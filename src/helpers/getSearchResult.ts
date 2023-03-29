import axios from 'axios'
import env from '@/helpers/env'

const GOOGLE_API = `https://www.googleapis.com/customsearch/v1?key=${env.GOOGLE_KEY}&cx=${env.GOOGLE_CX}&q=`

export default async function getSearchResult(query: { query: string }) {
  const { data } = await axios(GOOGLE_API + query.query)
  return data.items
}
