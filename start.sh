#!/bin/bash

# 启动云函数（前台运行）
npx tcb-ff &

# 等待服务器启动
sleep 2

# 根据操作系统自动打开浏览器
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:3000
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open http://localhost:3000
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    start http://localhost:3000
else
    echo "无法自动打开浏览器，请手动访问 http://localhost:3000"
fi

# 等待云函数进程
wait 