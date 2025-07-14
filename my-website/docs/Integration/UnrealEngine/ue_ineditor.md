---
sidebar_position: 30
title: 在编辑器中使用（Beta）
slug: /ue-ineditor
---	
# 在编辑器中使用道乐师插件

## 下载插件及 Ctrl Rig

适用于 UE5.3 及以上版本

- 道乐师 Unreal Engine 插件（以下简称编辑器插件）

https://kilimanjaro.sunnyview.tech/ineditor/Dollars.zip

- 适用于 UE4 Mannequin 的 Control Rig

https://kilimanjaro.sunnyview.tech/ineditor/Dollars_UE4Mannequin.zip

- 适用于 MetaHuman（通过 Quixel Bridge 下载）的 Control Rig

https://kilimanjaro.sunnyview.tech/ineditor/Dollars_MetaHuman.zip

- 适用于 MetaHuman（5.6 以上在本地生成）的 Control Rig

https://kilimanjaro.sunnyview.tech/ineditor/Dollars_MetaHumanCharacters.zip

## 示例项目

- UE4 Mannequin

https://pan.baidu.com/s/10IQB58uTfxPsy4yy8UJrzw?pwd=jn26

- 使用 IK Rig 驱动的角色

https://pan.baidu.com/s/1mzXcZSDQ0JCvqvHyCqIG9g?pwd=954e

- MetaHuman（通过 Quixel Bridge 下载）

https://pan.baidu.com/s/1z7LdIw5JpH3hO9wgyae9rw?pwd=q4z6

- MetaHuman（5.6 以上在本地生成）

https://pan.baidu.com/s/1zPFOtcLbNYLRVzXEV1mvww?pwd=prax

## 使用示例项目（以 UE4 Mannequin 项目为例）

1. 选择场景中的 Dollar Receiver，点击详情中的 Listen

如果点击 Listen 前，OSCServer 变量不为 None，可以点击 Stop 将其清空。

![](../../img/2025_06_06_20_22_05.png)

2. 点击 Listen 后，可以看到 OSCServer 变量被赋值

![](../../img/2025_06_06_20_24_15.png)

3. 选择角色蓝图，点击详情中的 Update Anim in Editor （5.6 以上本地生成的 MetaHuman 不需要这一步）

![](../../img/2025_06_06_20_25_12.png)

4. 打开道乐师中的虚幻同步，便可在编辑器中实时控制虚拟角色