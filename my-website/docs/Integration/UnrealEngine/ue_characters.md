---
sidebar_position: 20
title: 使用您的角色
slug: /ue-characters
---	

# 使用您的角色

## 动作捕捉

道乐师通过 **Live Link** 和 **OSC** 两种插件为角色添加动作捕捉，其中 OSC 插件包含 Ctrl Rig 与 IK Rig 两种方式。

### 使用 Live Link 插件

若您使用的版本支持 Live Link（MONO v.260623 及以上、虚幻 5.3 及以上），并且您了解虚幻 IK 重定向机制，推荐优先使用此方式。

若您还不熟悉 IK 重定向，可以参考 Epic 官方文档 [Runtime IK Retargeting](https://dev.epicgames.com/documentation/unreal-engine/runtime-ik-retargeting-in-unreal-engine)。

具体步骤见 [使用 Live Link 插件](/ue-livelink)。

### 使用 OSC 插件

OSC 插件提供以下两种方式。

#### 使用 Ctrl Rig

##### 使用道乐师提供的 Ctrl Rig

如果您的角色基于以下骨骼，您可以使用道乐师提供的对应 Ctrl Rig，实现动作捕捉。

- MetaHuman（通过 Quixel Bridge 下载）

<iframe src="//player.bilibili.com/player.html?bvid=BV1jerUYgEEX&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

- MetaHuman（5.6 以上本地生成）

<iframe src="//player.bilibili.com/player.html?bvid=BV1druBz3E29&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

- Daz3D Genesis8 & 8.1

<iframe src="//player.bilibili.com/player.html?bvid=BV15S4y1H7Li&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

- Character Creator

<iframe src="//player.bilibili.com/player.html?bvid=BV1KY4y1A7rc&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

##### 根据模型骨骼定制 Ctrl Rig

如果您的角色没有使用上述骨骼，您可以生成所需的 Ctrl Rig。

- VRM 角色

<iframe src="//player.bilibili.com/player.html?bvid=BV1Sa411g7Fj&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

- 其他任意角色

<iframe src="//player.bilibili.com/player.html?bvid=BV1N14y1s7bq&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

#### 使用 IK Rig

您也可以使用虚幻 5.4 以及之后版本的 IK Rig 实现动捕。

<iframe src="//player.bilibili.com/player.html?bvid=BV1NerLYcED7&autoplay=0" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 如何选择

1. 您使用的道乐师产品是否支持 Live Link，且虚幻为 5.3 及以上?
   - 是 &rarr; 推荐使用 Live Link 插件
   - 否 &rarr; 使用 OSC 插件，继续判断

2. （OSC 插件）是否可以使用道乐师提供的 Ctrl Rig?
   - 可以 &rarr; 直接使用
   - 不可以 &rarr; 继续判断虚幻版本

3. 判断虚幻引擎版本:
   - 5.4 以后 &rarr; 使用 IK Rig
   - 5.4 以前 &rarr; 根据骨骼定制 Ctrl Rig

## 面部捕捉

### Live Link for Face

从 2:22 开始

<iframe src="//player.bilibili.com/player.html?bvid=BV1jerUYgEEX&autoplay=0&t=142" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### Modify Curve

从 2:02 开始

<iframe src="//player.bilibili.com/player.html?bvid=BV1Zm4y1L7BU&autoplay=0&t=122" width="640" height="360" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 如何选择

1. 您使用的道乐师是否支持 Live Link for Face?（[查看支持的版本](/ue-livelinkface)）
   - 支持 &rarr; 使用 Live Link for Face
   - 不支持 &rarr; 使用 Modify Curve