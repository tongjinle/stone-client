# 用于开发中刷新数据库环境所用
> method一律为get

## 删除所有用户
route:'/dev/user/removeAll'

## 删除所有签到记录
route:'/dev/check/removeAll'

## 插入如下的虚拟道具记录
route:'/dev/item/insert'
[
    {name:'dragon_1',coin:10,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'dragon_2',coin:30,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'dragon_3',coin:100,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'dragon_4',coin:100,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'pig_5',coin:50,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'pig_6',2000,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'pig_7',2000,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
    {name:'pig_8',coin:1000,src:'http://www.th7.cn/d/file/p/2016/12/01/9c8c8eeb290d69739580d1333b8ae7e8.jpg'},
]

## 删除所有虚拟道具
route:'/dev/item/removeAll'