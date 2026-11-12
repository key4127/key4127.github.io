# SWE-QA-Pro

论文：SWE-QA-Pro: A Representative Benchmark and Scalable Training Recipe for Repository-Level Code Understanding        
arxiv：[https://arxiv.org/abs/2603.16124](https://arxiv.org/abs/2603.16124)

---

暂时不关注合成轨迹和训练的部分。主要关注的是，通过对issue进行聚类，进行了不同se任务的划分和筛选，保证类别平衡。筛选最后得到的分类可以关注一下。

具体方案：

1. 拼接issue的标题和正文
2. 用embedding模型转为向量
3. k-means聚类
4. 人工修正