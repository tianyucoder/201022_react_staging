## 1.脚手架自带文件
		public ---- 静态资源文件夹
				favicon.icon ------ 网站页签图标 --------- 最好有
				index.html -------- 主页面 -----------必须
				logo192.png ------- logo图
				logo512.png ------- logo图
				manifest.json ----- 应用加壳的配置文件
				robots.txt -------- 爬虫协议文件
		src ---- 源码文件夹
				App.css -------- App组件的样式
				App.js --------- App组件 ---------------必须有
				App.test.js ---- 用于给App做测试
				index.css ------ 样式
				index.js ------- 入口文件 --------------入口文件
				logo.svg ------- logo图
				reportWebVitals.js
					--- 页面性能分析文件(需要web-vitals库的支持)
				setupTests.js
					---- 组件单元测试的文件(需要jest-dom库的支持)

## 2.一个简单的Weather组件
		 1.所有组件有一个外壳组件，叫App
		 2.出了App组件，所有其他的组件要放在components文件夹中
		 3.components文件夹结构：一个组件就是一个文件夹，文件夹中包含：结构、样式等等
		 		即：components
				 			Weather
							 	index.jsx 或 Weather.jsx
								index.css 或 Weather.css

## 3.一个简单的Count组件
			可以这样引入Component：import {Component} from 'react'

## 4.状态提升
		1.如果状态是某个组件用，则直接放在自身的state中
		2.如果状态是某些组件用，则放在他们共同的父组件中

## 5.TodoList案例
		1.拆分组件时，要拆到位，结构、样式都要拆。
		2.组件化编码流程：
				1. 拆分组件: 拆分界面,抽取组件
				2. 实现静态组件: 使用组件实现静态页面效果
				3. 实现动态组件
					3.1 动态显示初始化数据
								3.1.1 数据类型
								3.1.2 数据名称
								3.1.2 保存在哪个组件?
					3.2 交互(从绑定事件监听开始)
		3.src/App.css放程序员写的公共样式
		4.public/xxx.css放成型的第三方公共样式
		5.//eslint-disable-next-line可以临时关闭eslint对下一行代码的语法检查