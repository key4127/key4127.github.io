---
sidebar_position: 1
---

## Boyer-Moore投票算法

Boyer-Moore投票算法可以在$O(n)$的时间复杂度和$O(1)$的空间复杂度下求出绝对众数。绝对众数指数组中，出现次数**大于**$\lfloor n/2 \rfloor$的数。

### 思想

维护一个候选元素``candidate``和一个计数``count``。如果计数为0，则将``candidate``设为当前元素；如果当前元素和候选元素相等，``count``自增；否则``count``自减。

这种算法的思想可以概括为；如果绝对众数存在，每次从数组中删去两个不同的数，则最后剩下的必定是绝对众数。显然，如果绝对众数不存在，这个算法会得到错误的答案，只要最后检查即可。

### 实现

以下为力扣169题的题解。注意此题规定了绝对众数一定存在。  

```C++
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate, count = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (count == 0) {
                candidate = nums[i];
            }
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    }
};
```