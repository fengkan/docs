---
sidebar_position: 70
title: 常见问题
slug: /unity-faq
---	

# 常见问题

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Unity 场景中的人物飘动

如果您发现你在摄像头前移动了小段距离，Dollars MONO 也识别出了您的移动，但是在 Unity 场景中，您的虚拟人物不移动，或者移动了一大段距离，比如下图，

![](../../img/unityfaq1.gif)

这通常是因为，虚拟人物的 Hips 骨骼，或者其某个父节点的 Scale 不为 1。

比如下图中的 Hips 骨骼的父节点 Armature，Scale 为 18.1。

![](../../img/2023_11_13_17_35_49.png)

此时，我们可以将 Armature 的 Scale 改为 1。

![](../../img/2023_11_13_17_41_08.png)

同时在模型的 Import Settings 中，将 Scale Factor 改为刚才的 18.1，并且 Apply。

![](../../img/2023_11_13_17_41_40.png)

之后就可以看到虚拟人物可以正常移动了。

![](../../img/unityfaq2.gif)

## 面捕无效

您可以确认以下几点，

- 模型 Blendshape 有效
- 面捕映射文件设置正确
- 没有其他组件可能改变 Blendshape 值（比如 VRMInstance）。

针对于 **VRMInstance**，您可以将其 **Update Type** 改为 **None**。

![](../../img/2024_12_18_11_38_31.png)

如果您希望保留 **VRMInstance** 的 **Update**，可以将 **Update Type** 改为 **Update**，并且在 **Script Execution Order** 中，将 **VRMInstance** 置于 **FaceCapController** 之前，以确保 **Dollars MoCap** 的面捕数据不被覆盖。

![](../../img/2024_12_18_11_38_49.png)
