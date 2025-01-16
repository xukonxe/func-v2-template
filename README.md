# 云函数2.0示例代码

该示例代码演示如何通过 `TypeScript` 编写 `云函数2.0` 项目代码。包括项目结构示例，以及调试。

TypeScript 示例代码见：<https://github.com/TencentCloudBase/cloudbase-examples/tree/master/cloudrunfunctions/ts-multiple-functions>

## 如何运行代码？

`Git Clone` 代码到本地后，可通过 `pnpm install` 安装依赖

通过如下命令允许云函数

```sh
npx tcb-ff
```

然后通过浏览器访问 `http://localhost:3000/` 即可查看示例代码运行结果。

## 如何调试代码？

示例代码中已经包含了 `VSCode` 的调试配置，可在 `Run And Debug` 界面选择 `launch-tcb-ff-local` 即可允许云函数并进行断点调试。

如何调试代码可参考：<https://docs.cloudbase.net/cbrf/how-to-debug-functions-code#%E8%B0%83%E8%AF%95-javascript-%E4%BB%A3%E7%A0%81>

## 文件说明

* `cloudbase-functions.json` 多函数配置文件，描述了函数的名称、入口文件、访问路径等信息
* `common` 公共模块，名称是任意的
* `sum` 多文件函数示例
* `echo` 回显函数示例
* `sse` 实现 `SSE` 的函数示例
* `ws` 实现 `WebSocket` 的函数示例
* `index.js` 默认函数示例

## 如何部署？

可在云开发平台创建云函数2.0服务后上传本示例代码包进行部署。

注意：如果通过 `Github Download zip` 方式下载的代码包，因多一层目录，需要解压后重新将文件压缩到根路径后再上传，或者上传解压后的目录。

压缩命令示例：

```sh
zip -x '/*.git/*' -x '.gitignore' -x '.DS_Store' -x 'node_modules/*' -r code.zip .
```

## 相关链接

* [腾讯云云开发-云函数2.0](https://docs.cloudbase.net/cbrf/intro)
