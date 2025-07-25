---
sidebar_position: 1
---

### 应用

KMP问题指“在某个字符串中寻找子串”。

KMP算法分为两部分：计算next数组、利用next数组求结果。next数组除KMP问题外还有许多应用，暂略。

### next数组

next数组也可理解为前缀函数。

对于某个字符串s的子串s[0...i]，next[i]等于子串中前缀和后缀相等的数目。此外，规定next[0]为0。

例如，abcabcd的next数组为  

|a|b|c|a|b|c|d|  
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|0|0|0|1|2|3|0|

对于next[i - 1]，它匹配到的最后一个字符为s[next[i - 1] - 1]。所以，如果s[i]和s[next[i - 1]]相等，则next[i] = next[i - 1] + 1。

如果s[i]和s[next[i - 1]] 不等，则需要找到满足s[j] = s[next[j - 1]]的j，next[i] = next[j] + 1。对于需要匹配的目标字符串，它至少由原来的字符串右移了一位，这就相当于要找到**已匹配串**中的前后缀。

例如，对于字符串“aaabaaaa”

在匹配最后一位时，b不等于a。原来的目标子串为aaab，匹配串为aaaa，不合法，则目标子串为aaa，匹配串为aaa，整体右移。这里，子串回退的长度为1，而next[2]为2，加一后正好等于新子串的长度。

即有状态转移方程

$$
j_0 = nxt[i - 1]
$$

$$
j_i = nxt[j_{i - 1} - 1]
$$

```C++
vector<int> findNext(vector<int> &s) {
    vector<int> nxt;
    nxt.push_back(0);

    for (int i = 1; i < s.size(); i++) {
        int j = nxt[i - 1];
        while (j > 0 && s[i] != s[j]) {
            j = nxt[j - 1];
        }
        if (s[i] == s[j]) {
            j++;
        }
        nxt[i] = j;
    }

    return nxt;
}
```

### 算法

将需要匹配的子串和待匹配串拼接在一起，中间添加一个不出现在任一字符串中的分隔符，计算整个拼接字符串的next数组。特殊地，计算待匹配串时，不需要保留完整的nxt数组，只需要保留最后一位以供下次计算。

或者，也可以不拼接字符串，用类似计算nxt数组的方式判断。  

```C++
int strStr(string haystack, string needle) {
    std::vector<int> nxt = findNxt(needle);

    int currentMatch = 0;
    for (int i = 0; i < haystack.length(); i++) {
        if (currentMatch == needle.length()) {
            return i - currentMatch;
        }

        if (haystack[i] == needle[currentMatch]) {
            currentMatch++;
        } else {
            while(currentMatch > 0 && haystack[i] != needle[currentMatch]) {
                currentMatch = nxt[currentMatch - 1];
            }
            if (haystack[i] == needle[currentMatch]) {
                 currentMatch++;
            }
        }
    }

    if (currentMatch == needle.length()) {
        return haystack.length() - needle.length();
    }

    return -1;
}
```