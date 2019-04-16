# react-webpack-template

@babel/plugin-proposal-class-properties--->处理箭头函数 .babelrc 加入配置

@babel/plugin-proposal-decorators--->处理装饰器

.babelrc

```
{
  "plugins": [
    ...
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ...
  ]
}
```

es6 强大的 async 异步函数配合 await,结果会发现直接报错

```
Uncaught ReferenceError: regeneratorRuntime is not defined
```

解决，安装 @babel/plugin-transform-runtime

.babelrc

```
{
  "plugins": [
    ...
    "@babel/plugin-transform-runtime",
    ...
  ]
}
```
