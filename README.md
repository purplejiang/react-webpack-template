# react-webpack-template

## commit 信息规范

需要指定 type，用冒号分隔，如

```
git commit -m "ci: 启用 husky"
```

### type

- feat[特性]:新增 feature
- fix[修复]: 修复 bug
- docs[文档]: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- style[格式]: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor[重构]: 代码重构，没有加新功能或者修复 bug
- perf[优化]: 优化相关，比如提升性能、体验
- test[测试]: 测试用例，包括单元测试、集成测试等
- chore[工具]: 改变构建流程、或者增加依赖库、工具等
- revert[回滚]: 回滚到上一个版本

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

.bezierEasingMixin();

开启 JavaScript 就可以了

```
{
  loader: "less-loader",
  options: {
    javascriptEnabled: true
  }
}
```
