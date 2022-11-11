#### 1、查看python 环境

```
conda info --env
```

![image-20221106093541850](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106093541850.png)

#### 2、创建python环境

```
conda create --name python35 python=3.5
```

- python35：环境名，可以更改
- python=3.5：python版本

#### 3、激活使用python

```
conda activate python35
```

#### 4、给当前环境安装包

- 不要使用`conda`进行下载，使用`pip`进行下载

```
pip install numpy
```

#### 5、删除python环境

```
 conda remove -n python35 --all
```

