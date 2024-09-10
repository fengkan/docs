---
sidebar_position: 20
title: 多人动捕
slug: /unity-multiplayer

---

# 多人动捕

您可以在多台电脑上分别运行道乐师动捕程序，并将动捕结果汇集到同一个 Unity 场景中，从而实现多角色同屏互动。

以使用两台电脑为例，假设我们希望在电脑 A（IP 地址192.168.1.3）和电脑 B（IP 地址192.168.1.10）上进行动捕，并将结果汇总到电脑 A 的 Unity 场景中。

:::info 注意
请先确保电脑 B 可以 ping 电脑 A，如果 ping 不通，请检查电脑 A 的防火墙设置。
:::

在电脑 A 上，我们照常运行道乐师动捕程序。

在电脑 B 上，运行道乐师程序后，我们打开选项对话框，在其中 ip 字段中，填入电脑 A 的 ip，192.168.1.3，并将 Unity 的端口，改为 39539 之外的其他数字，比如 39540，结果如下图。

![](../../img/2023_11_03_22_32_28-Dollars_MONO.png)

:::info 注意
您也可以在同一台电脑上运行多个道乐师动捕程序，此时，保持 IP 仍为默认的 127.0.0.1，只要将 Unity 端口号设置为不同的数字即可。
:::

在电脑 A 的 Unity 场景中，加入两个 DollarsMoCap Prefab。

为了便于标识，我们将他们分别命名为 DollarsMoCap_A，以及 DollarsMoCap_B。

![](../../img/2023_11_03_22_41_41-DollarsVRM_FaceCap_Multiplayers.png)

选中 DollarsMoCap_B，修改其 MoCap Manager 组件中的 Listen On Port，填入我们刚才在电脑 B 的中修改的端口号 39540。

![](../../img/2023_11_03_22_45_32-DollarsVRM_FaceCap_Multiplayers.png)

加入两个 Humanoid 人型模型，我们这里分别命名为 VRM_A 和 VRM_B，并为他们添加 MoCapSrc 组件。

在 VRM_A 的 MoCapSrc 组件中，加入 DollarsMoCap_A。

![](../../img/2023_11_03_22_48_20-DollarsVRM_FaceCa.png)

同样，在 VRM_B 中加入DollarsMoCap_B 即可完成！

![](../../img/2023_11_03_22_48_52.png)

此时 VRM_A 由电脑 A 上的动捕程序控制，VRM_B 则由电脑 B 上的动捕程序控制。

以下是示例项目。

链接：https://pan.baidu.com/s/10JPAIZ-QQckqZIzFw6q8IA 

提取码：6ioj 
