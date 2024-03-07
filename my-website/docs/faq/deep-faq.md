---
sidebar_position: 20
title: DEEP
slug: /deep-faq
---	

# Dollars DEEP 常见问题

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## 下半身不动

请确认以下几点，

- DEEP 处于全身动捕模式
- 动捕人偶为蓝色
- 动捕演员下半身完整入镜
- Dollars DEEP 安装目录中不包含非英文字符

如果以上几点都确认无误，动捕人偶下半身仍然固定不动，可以在以下页面下载 Azure Kinect Body Tracking SDK，运行其中的 k4abt_simple_3d_viewer，确保其能够正确运行。

https://learn.microsoft.com/en-us/azure/kinect-dk/body-sdk-setup

如果您已经确认 k4abt_simple_3d_viewer 可以正确进行人体追踪，但 DEEP 仍然无法得到下半身的动作，可以联系我们获得进一步支持。