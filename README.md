# tremotedesk-web-demo
tremotedesk-web-demo



### 如何使用


1、修改server/config.ts 中的 `appkey` 和 `secret`, 替换为客户自己的`appkey` 和 `secret`


2、启动服务端


```js
cd server/  && npm install

npx ts-node server.ts
```


3、启动Web控制端

```js
cd client/  && npm install

npm run dev
```



4、启动和编译windows被控端

参考（windows demo)[https://github.com/Tencent-RTC/tremotedesk-win-demo] 编译运行windows demo,

输入 appkey: xxxx, 输入roomid: xxxxxxx, 输入userid(userid 可以自定义)， 点击login 进入房间。



5、启动Web控制端

在web控制端输入，和步骤4种中相同的 appkey 和 roomid(`这里一定要输入同样的roomid才能进入同一个房间`)， userid 可以自定义。

在确保windows 被控端login成功之后(会打印心跳信息)， Web控制端点击进房， 稍等片刻之后点击`connectToHost` 连接windows被控端。






