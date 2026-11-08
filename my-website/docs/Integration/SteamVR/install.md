---
sidebar_position: 10
title: 概述与安装
slug: /steamvr
---

# SteamVR

:::info 注意
目前支持 Dollars MONO。
:::

无需连接真实头显，道乐师即可在 SteamVR 中模拟头显、双手柄和最多八个追踪器，并用动捕数据驱动它们，在 VRChat 等应用中实现全身追踪。

使用此功能需要 **DollarsMoCapSteamVRBridge**（以下简称 Bridge）。请先通过 Steam 安装 SteamVR。

:::info 注意
以下驱动安装步骤适用于未安装实体头显的情况。如果电脑已经安装了实体头显，可能需要参考 SteamVR 文档，了解如何安装两套 VR 系统。
:::

## 安装驱动

1. 关闭 SteamVR。
2. 打开 Bridge，点击右上角的「驱动设置」。
3. 根据需要修改设置，点击「安装」。
4. 启动 SteamVR。

![](../../img/steamvr-driver-settings.png)

| 设置 | 说明 |
| --- | --- |
| FOV | 虚拟头显的垂直视场角，默认值为 90°。 |
| 端口 | 接收动捕数据所用的端口，默认为 40439，须与 MONO 中 SteamVR 的端口一致。 |
| 追踪点 | 头部和双手始终启用。腰部、双脚、胸部、双肘和双膝可分别启用或停用，右侧会显示追踪点总数。默认启用 6 点（腰部和双脚）。 |

:::warning 注意
- SteamVR 正在运行时，无法安装或卸载驱动，相关按钮会显示为灰色。
- 修改设置后，需再次点击「安装」并重启 SteamVR，设置才会生效。
- 驱动文件位于 Bridge 所在目录下的 `dollarsmocap` 文件夹中。移动 Bridge 后，请重新安装驱动。
:::

## 卸载

关闭 SteamVR 后，在驱动设置页点击「卸载」。Bridge 会移除该驱动的注册信息，以及由该驱动写入的房间和追踪器设置；其他驱动和设置不受影响。
