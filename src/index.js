//引入Reac核心库，当年我们是在html文件中通过script标签引入的
import React from 'react'; 
//引入ReactDOM核心库，当年我们是在html文件中通过script标签引入的
import ReactDOM from 'react-dom'; 
//引入整个应用的外壳组件——App，我们程序员缩写的组件，都是作为App子组件的身份去出现
import App from './App';

//渲染App组件即可
ReactDOM.render(<App/>,document.getElementById('root'));
