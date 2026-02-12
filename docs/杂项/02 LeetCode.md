记录一些刷leetcode出的错。

1. 类型转换

int和size_t比对时，int会被转成size_t类型，会导致负数比正数大。