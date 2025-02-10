import OpenAI from 'openai'

const baseURL = 'https://api.moonshot.cn/v1'
const apiKey = 'sk-l74oSGjCKD6CO394MsvOGnL2xBsFDsBl83hmNftopAMPOnpB'
const model = 'moonshot-v1-8k'

const client = new OpenAI({
  baseURL: baseURL,
  apiKey: apiKey
})

export async function main (event, context) {
  // 切换到 SSE 模式
  // SSE 的详细示例可参考 sse 函数
  const sse = context.sse()
  if (sse && !sse.closed) {
    const stream = await client.chat.completions.create({
      model: model,
      messages: [{
        role: "user", content: "讲个笑话"
      }],
      temperature: 0.3,
      stream: true,
    })
    sse.on('close', () => {
      stream.controller.abort()
    })
    for await (const chunk of stream) {
      sse.send({data: JSON.stringify(chunk)})
    }
    sse.end()
  }

  return ''
}
