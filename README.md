# 云函数2.0示例代码

文件说明

* `cloudbase-functions.json` 多函数配置文件，描述了函数的名称、入口文件、访问路径等信息
* `common` 公共模块，名称是任意的
* `sum` 多文件函数示例
* `echo` 回显函数示例
* `sse` 实现 `SSE` 的函数示例
* `ws` 实现 `WebSocket` 的函数示例
* `index.js` 默认函数示例

注意：如果通过 `Github Download zip` 方式下载的代码包，因多一层目录，需要解压后重新将文件压缩到根路径后再上传，或者上传解压后的目录。

压缩命令示例：

```sh
zip -x '/*.git/*' -x '.gitignore' -x '.DS_Store' -r code.zip .
```
