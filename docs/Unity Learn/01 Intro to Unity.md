---
sidebar_position: 1
---

这篇笔记包含Unity Learn中“初级编程”一课中与Unity相关的内容。  

### 介绍

教程网址：  
[Unity 初级编程](https://learn.unity.com/tutorial/zuo-wei-xing-wei-zu-jian-de-jiao-ben?uv=4.x&projectId=5e3afd88edbc2a2998252c77#)  

这门课介绍了编程基础和一些游戏编程相关的内容，只关注后者。 

### C#特性

**迭代时使用 ``foreach``**

```csharp
string[] strings = new string[3];

string[0] = "a";
string[1] = "b";
string[2] = "c";

foreach(string item in strings) {
    print(item)
}
```

### 脚本

在Unity中，脚本可以作为对象的行为组件。有多种方式可以将脚本与对象连接，连接后，对象会应用脚本的对应函数。  

这是一个脚本实例：

```csharp
using UnityEngine;
using System.Collections;

public class ExampleBehaviourScript : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer> ().material.color = Color.red;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
    }
}
```

### Awake 和 Start

```csharp
using UnityEngine;
using System.Collections;

public class AwakeAndStart : MonoBehaviour
{
    void Awake ()
    {
        Debug.Log("Awake called.");
    }
    
    
    void Start ()
    {
        Debug.Log("Start called.");
    }
}
```

``Awake`` 和 ``Start`` 都是初始化函数，自动在加载脚本时调用，在一个对象的生命周期内只能调用一次。无论脚本组件是否启用，``Awake`` 都会被调用；只有脚本组件启用了， ``Start`` 才会被调用，而且是直接在第一次 ``Update`` 之前调用。  

### Update 和 FixedUpdate

```csharp
using UnityEngine;
using System.Collections;

public class UpdateAndFixedUpdate : MonoBehaviour
{
    void FixedUpdate ()
    {
        Debug.Log("FixedUpdate time :" + Time.deltaTime);
    }
    
    
    void Update ()
    {
        Debug.Log("Update time :" + Time.deltaTime);
    }
}
```

``Update`` 和 ``FixedUpdate`` 都可以自动反复调用。但 ``Update`` 的调用频率为帧，不同调用的时间间隔不等，可以用于识别输入、简单的计时器以及非物理元件的移动等。``FixedUpdate`` 每次调用的时间间隔相同，一般用于调整物理对象（刚体）。  

举例，如果以每次调用 ``Update`` 的时间间隔乘速度来计算人物位置，在出现卡顿时，两帧之间时间间隔很久，导致在一帧内人物会移动很远。这种情况就需要 ``FixedUpdate`` 而不是 ``Update`` 。