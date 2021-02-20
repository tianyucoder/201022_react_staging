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
		(1).拆分组件时，要拆到位，结构、样式都要拆。
		(2).组件化编码流程：
					1. 拆分组件: 拆分界面,抽取组件
					2. 实现静态组件: 使用组件实现静态页面效果
					3. 实现动态组件
						3.1 动态显示初始化数据
									3.1.1 数据类型
									3.1.2 数据名称
									3.1.2 保存在哪个组件?
						3.2 交互(从绑定事件监听开始)
		(3).src/App.css放程序员写的公共样式
		(4).public/xxx.css放成型的第三方公共样式
		(5).//eslint-disable-next-line可以临时关闭eslint对下一行代码的语法检查
		(6).关于react中<input type="checkbox">的checked属性与defaultChecked
					1.checked属性，时时刻刻起作用，而且必须配合disabled或onChange使用，否则就不能改了。
					2.defaultChecked属性，只起一次作用，可以单独使用 （不建议使用）
		(7).关于父子之间通信：
						1.【父组件】给【子组件】传递数据：通过props传递
						2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
		(8).掌握数组的reduce方法

###

## 6.路由的基本使用
		1.明确好界面中的导航区、展示区
		2.导航区的a标签改为Link标签
					<Link to="/xxxxx">Demo</Link>
		3.展示区写Route标签进行路径的匹配
					<Route path='/xxxx' component={Demo}/>
		4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 7.NavLink的使用
			1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名

## 8.路由组件和一般组件的区别
			1.使用方式不同：
						一般组件：程序员自己写组件标签触发渲染，例如： <Demo/>
						路由组件：靠路由器匹配路径触发渲染，例如：<Route path="/about" component={Demo}/>
			2.存放位置不同：
						一般组件：components
						路由组件：pages
			3.收到的props不同：
						一般组件：程序写组件标签时传了什么，就收到什么
						路由组件：收到固定一些属性，决堤属性如下
						history:
								go: ƒ go(n)
								goBack: ƒ goBack()
								goForward: ƒ goForward()
								push: ƒ push(path, state)
								replace: ƒ replace(path, state)
						location:
								pathname: "/about" ===>获取当前所处路由的路径
								search: "" ====> 用于收集search参数（收集的是字符串）
								state: null ====> 用于收集state参数
						match:
								params: {} ===>用于收集params参数

## 9.路由的严格匹配与模糊匹配
				1.默认使用的是模糊匹配
				2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
				3.严格匹配不要随便开启，需要再开，开启会导致无法继续匹配二级路由
				
## 10.二级路由、三级路由
				1.编写路由链接、注册路由时要带有上一级路由的路径
				2.不要开启严格模式

### 11.向路由组件传递参数
				1.params参数
							路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
							注册路由(声明接收！！！)：<Route path="/demo/test/:name/:age" component={Test}/>
							接收参数：this.props.match.params
				2.search参数
							路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
							注册路由(无需声明接收)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.search
							备注：需要借助querystring进行解析
				3.state参数
							路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}}>详情</Link>
							注册路由(无需声明接收)：<Route path="/demo/test" component={Test}/>
							接收参数：this.props.location.state