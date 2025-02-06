import OpenAI from 'openai'

const baseURL = 'replace-with-your-baseURL'
const apiKey = 'replace-with-your-apiKey'
const model = 'replace-with-your-modelName'

const client = new OpenAI({
  baseURL: baseURL,
  apiKey: apiKey
})

export async function main (event, context) {
  // 切换到 SSE 模式
  const sse = context.sse()

  sse.on('close', () => {
    console.log('sse closed')
  })

  // 发送事件到客户端，发送前先检查是否已经关闭，如未关闭可发送
  if (!sse.closed) {
    const stream = await client.chat.completions.create({
      model: model,
      messages: [{ 
          role: "system", content: "",
          role: "user", content: "讲个笑话"
      }],
      temperature: 0.3,
      stream: true,
    });
    for await (const chunk of stream) {
      sse.send({data: JSON.stringify(chunk)})
    }

    // 推荐由客户端主动进行关闭
    // sse.end()
  }

  // 函数执行时间以函数返回时间计算
  // 函数返回后，HTTP 请求处理完成，函数内的异步逻辑继续进行处理，不影响函数返回时间
  // TCP 网络连接依然被 SEE 占用，直到 SSE 连接被客户端或服务端关闭，可以继续发送消息到客户端
  // SSE协议已经将http转换到长连接模式，需要客户端或服务端在适当的时候主动关闭连接，否则将导致连接一直占用，消耗网络资源
  // 因TCP主动关闭的一方将进入TIME_WAIT状态，大量TIME_WAIT状态的连接将导致网络资源耗尽，无法建立新的连接，所以客户端主动关闭连接时更符合最佳实践的
  // 因客户端可能并不知晓在什么时间关闭连接，服务端可以发送一个特殊的消息，告诉客户端消息已经结束，可以关闭连接了
  return ''
}
