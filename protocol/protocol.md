# 数据协议v1.0

## 通过小程序的code,返回token
** request **
route:'/getToken'
method:'get',
```
{
    code:number,
}
```

** response **
{
    code?:number,
    token?:string,
}

## 绑定id,使得微信openId和dota2数字id形成一个映射关系
> 绑定id
** request **
route:'/auth/bind',
method:'post',
```
{
    // dota2数字id
    dotaId:string,
}
```
** response **
```
{
    // 错误码
    // 0 数据格式错误
    // 1 openId已经存在了
    code?:number,
    // 第一次绑定的奖励
    reward?:number,
}
```

** 所有/auth/**路由下的请求的header中都带上key为"openId"的字段,服务器将以此来作为权限认证 **

## 查看个人信息
> 查看用户个人信息
** request **
route:'/auth/user/info'
method:
```
{   
}
```
** response **
```
{
    // 错误码
    // 0 不存在此人
    // 1 数据格式不对
    code?:number,
    // dota数字id
    dotaId?:number,
    // 虚拟币
    coin?:number,
    // 第一次绑定时间戳,精确到毫秒
    bindTime?:number,
}
```

## 签到
> 今日是否能签到
** request **
route:'/auth/check/canCheck'
method:'get'
```
{}
```
** response **
```
{
    // 今日是否能签到
    flag:boolean,
}
```


> 每日签到 
** request **
route:'/auth/check/dayCheck',
method:'post',
```
{}
```

** response **
```
{
    // 错误码
    // 0 已经签到
    code?:number,
    // 虚拟币奖励
    reward?:number,
}

```

## 虚拟物品兑换
> 使用虚拟币兑换游戏中的虚拟道具
** request **
route:'auth/item/buy'
method:'post'
```
{
    // 虚拟道具编号
    id:number,
}
```
** response **
```
{
    // 错误码
    // 0 金币不足
    // 1 虚拟道具出售一空或者虚拟道具不存在,即错误的道具编号
    code?:number,
}

```


> 查看虚拟物品列表
** request **
route:'/auth/item/list'
method:'get'
```
{
    // 页码,从0开始计数
    pageIndex:number,
    // 每页数量
    pageSize:number,
    // 如果设为true,则过滤掉当前用户的虚拟币不能购买的虚拟道具
    canBuy:boolean,
}
```
** response **
```
{
    // 错误码
    // 0 缺少必要的参数
    code?:number,
    // 虚拟道具列表
    list:{
        // 名称
        name:string,
        // 价格
        coin:number,
        // 图片
        src:string,
    }[],
    // 总共的个数(道具个数,而不是页数)
    totalCount:number,
}
```

## 黑店相关
> 创建黑店房间
** request **
route:'/auth/room/create'
method:'post'
```
{
    // 新手位置数量
    count:number,
    // 黑店价格
    coin:number,
}
```
** response **
```
{
    // 错误码
    // 0 用户已经创建了黑店
    // 1 用户已经参加了其他人的黑店
    code?:number,
    // 生成的房间编号
    id?:number,
}
```
> 通过黑店编号获取黑店信息
** request **
route:'/auth/room/info'
method:'get'
```
{
    // 如果不注明,表示查询用户的当前黑店
    roomId?:number,
}
```
** response **
```
{
    // 错误码
    // 0 用户没有当前黑店
    code?:number,
    info?:{
        // 黑店编号
        roomId:number,
        // 黑店价格
        coin:number,
        // 黑店创建了之后,5min(默认)之内如果没有人参加就不能参加了
        // 创建黑店的时间戳
        begin:number,
        // 黑店加入的结束时间,(意思过了这个时间点则不能再申请加入)
        end:number,
        // 可以评价的时间
        // 备注下,"元组"数据类型,下面的表示数组就只有2个元素,且都是number类型
        commentDuration:[number,number],
        // 成员以及成员的评价
        commentList?:{
            openId:number,
            // 评价
            // 1 好评
            // 0 普通(默认评价)
            // -1 差评
            comment:number,
        }[],
        // 战绩统计,统计方式待定
        score?:any
    },
}
```

> 请求加入黑店
** request **
route:'/auth/room/apply'
method:post
```
{
    roomId:number,
}
```
** response **
```
{
    // 错误码
    // 0 用户coin不够支付
    // 1 黑店不存在
    // 2 黑店已经过了申请时间
    code?:number,

}
```
> 评价黑店
** request **
route:'/auth/room/comment'
method:post
```
{
    // 黑店编号
    roomId:number,
    // 评价
    // 1 好评(默认评价)
    // 0 普通
    // -1 差评
    comment:number,
}
```
** response **
```
{
    // 错误码
    // 0 不存在这样的黑店
    // 1 用户在该黑店没有评价权(他不在该黑店中)
    // 2 不在可以评价的时间内
    code?:number,
}
```

> 查询开黑历史
** request **
route:'/auth/room/history'
method:get
```
{
    // 页码,从0开始计数
    pageIndex:number,
    // 每页数量
    pageSize:number,
}
```
** response **
```
{
    // 错误码
    code?:number,
    // 列表
    list?:{
        // 黑店的开始时间戳
        begin:number,
        // 好评率
        comment:{
            good: number,
            normal: number,
            bad: number,
            },
        // 黑店为店主带来的虚拟币总收入
        incom:enumber,
        score:any,
        }[],

}
```

