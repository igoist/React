# Redux 学习笔记
<p>在此主要记录一些要点</p>
<p>先用几天时间来静静消化，再回来补充</p>


## 项目文件格局


 |- actions
 |- components
 |- constants 为 ActionTypes 定义<code>const</code>，有种宏定义的感觉
reducers
store

## Action
<p>要做的是为各个事件返回下一个<code>state</code></p>
<p>并在之后多个文件内<code>import</code>Action中相关事件</p>


## Reducer
<p>创建单个Reducer只需要引入ActionTypes，之后在<code>switch</code>中定义相关Action的<code>case</code></p>
<p>值得注意的是在单个Reducer对象中<code>initialState</code>一定得是对象数组格式<code>[{...}]</code>，至于为什么，<code>combineReducers</code>方法源码中很清楚</p>
```javascript
var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
```
<p>文件关联顺序 reducers/counter.js -> reducers/index.js -> store/configureStore.js</p>


## Store

<p>文件关联顺序 store/configureStore -> index.js</p>
