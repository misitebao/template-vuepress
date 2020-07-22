## typeof null→"object" ?

《你不知道的Javascript》译者：

> 原理是这样的，不同的对象在底层都表示为二进制，在Javascript中二进制前三位都为0的话会被判断为Object类型，null的二进制表示全为0，自然前三位也是0，所以执行typeof时会返回"object"。



