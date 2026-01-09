这篇笔记记录刷力扣需要的C++语法。

代码中类型不一定代表实际STL的真实数据类型。

## vector

初始化

```cpp
vector<int> v(size, initial_value);
```

遍历

```cpp
vector<int>::iterator it = v.begin();

for (int i = 0; i < v.size(); i++) {
    cout << it[i];
    cout << *(it + i);
}

for (vector<int>::iterator it = v.begin(); it != v.end(); it++) {
    cout << *it;
}
```

函数

```cpp
push_back();
emplace_back();
pop_back();
insert(position, value);
erase(position);
erase(begin, end); // 左闭右开
```

## stack

函数

```cpp
push(value);
pop();
top();
```

## queue

函数

```cpp
push(value);
front();
back();
```

## map

map的基本元素为pair。

遍历

```cpp
for (auto it = m.begin(); it != m.end(); it++) {
    cout << it->first << ": " << it->second;
}
for (const auto& pair : m) {
    cout << pair.first << ": " << pair.second;
}
```

函数

```cpp
map[key] = value; // 增加/修改
map.insert(pair<T1, T2>(key, value));
map.erase(key);
find();
count();
lower_bound(value);
upper_boud(value);
```

## set

初始化

```cpp
set<int> s = {1, 2, 3};
set<int> s(vec.begin(), vec.end());
```

遍历  

```cpp
for (set<int> iterator it = s.begin(); it != s.end(); it++) {
    cout << *it;
}
```

函数 

```cpp
void insert(value);
void emplace(value);
size_t erase(value); //返回删除的元素个数
int count();
set<T> iterator find(); // 若未找到，返回结尾迭代器
set<T> iterator lower_bound(value); // 返回小于等于，闭区间
set<T> iterator upper_boud(value); // 返回大于，开区间
```

## priority_queue

**默认最大堆**。自定义排序函数时，排序方式和函数是**相反**的。对自带的排序也成立，即``greater<T>``是**小顶堆**。

初始化

```cpp
#include<queue>
#include<functional>

priority_queue<T> q; // 大顶堆
priority_queue<T, vector<T>, greater<T>> q; // 小顶堆
// 另一个排序为less<T>

struct cmp {
    bool operator() (const int& a, const int& b) const {
        return a > b;
    }
}

priority_queue<int, vector<int>, cmp> q;
```

函数

```cpp
push(value);
pop();
top();
```

## max/min

```cpp
#include<limits>

int max_int_value = INT_MAX;
int min_int_value = INT_MIN;
long long max_long_long_value = LONG_LONG_MAX;
long long min_long_long_value = LONG_LONG_MIN;
float max_float_value = FLT_MAX;
float min_float_value = FLT_MIN;
double max_double_value = DBL_MAX;
double min_double_value = DBL_MIN;
```

## sort

```cpp
// 不需要struct
bool cmp(int a, int b) {
    return a > b;
}
sort(v.begin(), v.end(), cmp)
```