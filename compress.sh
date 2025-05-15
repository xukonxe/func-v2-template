#!/bin/bash

# 排除不需要的文件和目录
zip -r code.zip . \
    -x "*.git/*" \
    -x ".gitignore" \
    -x ".DS_Store" \
    -x "node_modules/*" \
    -x "logs/*" \
    -x "*.log" \
    -x "*.zip" \
    -x "compress.sh"

echo "压缩完成，文件名为 code.zip" 