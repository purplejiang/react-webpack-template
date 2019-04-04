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
