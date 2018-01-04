// config-lite 是一个轻量的读取配置文件的模块。
// config-lite 会根据环境变量（NODE_ENV）的不同加载 config 目录下不同的配置文件。
// 如果不设置 NODE_ENV，则读取默认的 default 配置文件，如果设置了 NODE_ENV，则会合并指定的配置文件和 default 配置文件作为配置，
// config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件。
module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}
