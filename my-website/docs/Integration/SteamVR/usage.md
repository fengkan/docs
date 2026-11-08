---
sidebar_position: 30
title: 使用与常见问题
slug: /steamvr-usage
---

# 使用与常见问题

## Dollars MONO 设置

在设置的「传输」页中启用 SteamVR，并确保端口与 Bridge 驱动设置中的端口一致（默认为 40439）。

:::note 截图占位
MONO 设置的传输页，SteamVR 一行
:::

- 如果 MONO 与 SteamVR 不在同一台电脑上，请将 MONO 的目标 IP 设置为运行 SteamVR 的电脑的 IP 地址。Bridge 必须与 SteamVR 运行在同一台电脑上。
- Bridge 收到动捕数据后，窗口底部会显示「正在接收」。
- 发送给 SteamVR 的始终是实际的左右手数据，不受 MONO 镜像开关影响。

## 试用版限制

试用版中，SteamVR 每连续发送 3 分钟会暂停 10 秒。暂停期间，头部和身体会保持在暂停时的位置，按键仍可正常使用。倒计时显示在 MONO 右上角的试用提示中。

:::note 截图占位
MONO 右上角的试用提示（含 SteamVR 一行）
:::

## 常见问题

### Bridge 底部一直显示「等待数据」

请确认 MONO 中已启用 SteamVR、MONO 与 Bridge 的端口一致，并且 SteamVR 已启动。如果 MONO 在另一台电脑上运行，还需确认目标 IP 正确，并检查运行 SteamVR 的电脑的防火墙是否允许该端口的 UDP 通信。

### 修改了追踪点，SteamVR 中没有变化

修改驱动设置后，请关闭 SteamVR，在 Bridge 中再次点击「安装」，然后重新启动 SteamVR。

### 电脑上还连接着真实头显

SteamVR 一次只能使用一台头显。请断开真实头显，或前往 SteamVR 设置中的「启动/关闭」>「管理加载项」，停用真实头显对应的驱动。

### 删除 Bridge 之前

删除 Bridge 前，请先在其中卸载驱动，否则 SteamVR 中仍会保留该驱动的注册信息。
