## Paxos

Paxos的经典思路为

- 判断自己是否为唯一writer
    - 是：commit
    - 否：重试

### single-decree paxos

- 判断自己是否为唯一writer
    - 给所有机器发送请求，判断自己是否有最大的proposal号
    - 是（超过半数）：commit
    - 否：重试

### multi-paxos