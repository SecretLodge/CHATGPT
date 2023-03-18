import axios from 'axios'
import env from '@/helpers/env'

export interface message {
  role: string
  content: string
}

const request = axios.create({
  method: 'post',
  baseURL: env.CHATGPT_API,
  headers: {
    Authorization: `Bearer ${env.CHATGPT_KEY}`,
    'Content-Type': 'application/json',
  },
})

export default async function getAnswerGPT(
  messages: message[]
): Promise<message> {
  const { data } = await request({
    data: {
      model: 'gpt-3.5-turbo',
      ...messages,
    },
  })
  return data.choices[0].message
}
