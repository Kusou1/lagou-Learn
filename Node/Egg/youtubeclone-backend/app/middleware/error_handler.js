// 错误处理中间件
module.exports = () => { // 外层函数负责接收参数
  // 返回一个中间件处理函数
  return async function errorHandler (ctx, next) {
    try {
      // 没有异常则next，有异常则进入catch
      await next()
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx)

      const status = err.status || 500
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error =
        status === 500 && ctx.app.config.env === 'prod'
          ? 'Internal Server Error'
          : err.message

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error }
      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = status
    }
  }
}
