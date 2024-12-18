---
sidebar_position: 15
title: 人物追踪状态
slug: /ue-visibility
---	
# 人物追踪状态

您可以通过 **DollarsMoCap** 数据结构中的 **Visibility Head** 来判断当前是否追踪到人。

当追踪到人时，该值一般大于 0.95，您可以实测适合您的值。

角色蓝图中获取方法如下，

![](../../img/2024_07_25_17_53_19.png)

动画蓝图中获取方法如下，

![](../../img/2024_07_25_17_54_08.png)

除了 **VisibilityHead** 外，**DollarsMoCap** 还含有以下追踪值，您可以根据需要使用。

- VisibilityLeftHand

- VisibilityRightHand

- VisibilityHip

- VisibilityLeftLeg

- VisibilityRightLeg