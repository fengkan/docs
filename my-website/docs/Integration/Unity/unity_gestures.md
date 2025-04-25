---
sidebar_position: 17
title: 姿势识别
slug: /unity-gestures
---

# 姿势识别

:::info

道乐师的以下产品支持本文提及的姿势识别：

- Dollars SOMA

:::

## 监听姿势事件

您可以通过监听 ```Dollars.GestureListener.OnGestureDetected``` 以及 ```Dollars.GestureListener.OnHandGestureDetected``` 这两个事件，来对身体姿势以及手势做出反应。

一个典型的控制类如下：

```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GestureController : MonoBehaviour
{
    void Awake()
    {
        Dollars.GestureListener.OnGestureDetected += HandleGesture;
        Dollars.GestureListener.OnHandGestureDetected += HandleHandGesture;
    }

    void HandleHandGesture(string gesture)
    {
        Debug.Log(gesture);
    }

    void HandleGesture(string gesture, float value)
    {
    }
}
```

## 参数说明

在这两个事件中，
- ```gesture``` 参数表示捕捉到的姿势或手势的名称。
- ```value``` 参数在 ZoomIn 和 ZoomOut 动作中表示双手当前距离与动作触发时的比例；在其他动作中，该值始终为 0。

## 示例项目

您可以在这里看到使用 ZoomIn，ZoomOut 控制相机 FOV，并且通过姿势、手势进行特效切换的示例。

https://pan.baidu.com/s/15t3VUIkQvC9Lzu4xVVYA5A?pwd=vwr4