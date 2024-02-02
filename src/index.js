import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from "./04_组件通信-父传子/App"
// import App from "./07_组件插槽的实现/App.jsx"
// import App from "./08_组件的作用域插槽/App.jsx"
// import App from "./09_非父子通信-Context/App"
// import App from "./10_非父子通信-EventBus/App"
// import App from "./11_setState详细使用/App"
// import App from "./12_render函数的优化/App"
// import App from "./13_数据不可变的力量/App"
// import App from "./14_ref获取DOM和组件/App"
// import App from "./14_ref获取DOM和组件/02_ref获取类组件实例"
import App from "./15_受控和非受控组件/App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App name={"coderphy"}/>
);