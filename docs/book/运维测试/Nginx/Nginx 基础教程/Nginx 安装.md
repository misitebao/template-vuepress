# Nginx 安装

## 在linux上安装

### 1.编译安装

#### 1.1 下载`nginx`源码

官网http://nginx.org/en/download.html下载源码，并上传到服务器，当然你也可以选择用wget

```shell
cd /usr/local/src
wget -c http://nginx.org/download/nginx-1.10.3.tar.gz  //版本自己选择
```

解压压缩包

```shell
tar zxvf nginx-1.10.3.tar.gz
```

### 2.yum安装

```shell
yum install nginx
```



