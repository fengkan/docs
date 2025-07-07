---
sidebar_position: 55
title: 设置 Profile
---

# 设置动捕 Profile

从 v.250707 起，MONO 支持设置动捕 Profile。

通过设置 Profile，您可以限制关节的活动范围，以减轻捕捉过程中可能出现的穿模问题，如下图右侧所示。

![](../img/2025_07_07_18_20_14.jpg)

如果您使用 Unity 渲染虚拟形象，也可以通过 Unity 自带的 Muscle Settings 实现类似的效果，详情请参见，

https://github.com/SunnyViewTech/MuscleSettings

:::warning 注意

实时动捕中完全避免穿模仍然存在技术挑战，本功能旨在提供一种有效的缓解手段。

:::

## 设置步骤

1. 在进行 Profile 设置前，请先完成道乐师插件的配置，确保动作可以正确同步至您的虚拟形象。

2. 在 MONO 中激活与虚拟形象的动作同步。

3. 进入 Profile 编辑模式。

4. 将 Current Position 拉到最左侧。调整 Upper Arm Range 的最小活动范围。

5. 将 Current Position 拉到最右侧，调整 Upper Arm Range 的最大活动范围。

6. 调整 Current Position，观察并确认设置是否符合预期。

![](../img/2025-07-07_17-57-21-808.gif)

7. 点击**保存**，完成设置。保存后的 Profile 将在每次启动程序时自动载入。

8. 您可以为不同角色设置不同的 Profile，并且根据需要加载它们。