---
sidebar_position: 6.5
title: 连接 Femto 系列
---

# 连接 Femto Bolt 及 Femto Mega

在使用 DEEP 前，请先使用一下步骤确认 Femto 正常连接并可以进行骨骼识别。

## 确认摄像头正常工作

下载并运行 OrbbecViewer

https://github.com/orbbec/OrbbecSDK/releases

![](../img/1.png)

:::info 网盘下载
如果您无法打开上述连接，可以在以下网盘下载，

链接：https://pan.baidu.com/s/1AJCMXYzM5nseWC1GooRZ0Q?pwd=9h02 
:::

点击左下方四角，在弹出的更多对话框中确认连接方式为 3.1。

![](../img/566c2b857ae79a7f2b2c60a417bb0bb2191.png)

点选上方按钮，确认各相机可以正确输出。

![](../img/3.png)

##  确认骨骼追踪正常工作

下载 Azure Kinect Body Tracking SDK 并安装

https://github.com/orbbec/Azure-Kinect-Samples/releases/download/body-tracking-bolt-and-mega-bin/body-tracking-bolt-and-mega-bin.zip

（来自 https://github.com/orbbec/Azure-Kinect-Samples ）

:::info 网盘下载
如果您无法打开上述连接，可以在以下网盘下载，

链接：https://pan.baidu.com/s/1ri--9QfDAL1_mLEjr12FXw?pwd=mf47 
:::

解压缩后，运行 Azure Kinect Body Tracking SDK\tools\k4abt_simple_3d_viewer，确认有人体骨骼输出。

![](../img/4.png)