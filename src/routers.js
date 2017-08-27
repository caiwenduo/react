/**
 * routers
 * 更多文档
 * https://github.com/ReactTraining/react-router/tree/master/docs
 */

// 根组件
import App from './App'
import App1 from './App1'
import App2 from './App2'

const routers = {
    path: '/',
    component:App,
    indexRoute: { component: App },
    
    childRoutes: [
        {
            path: 'login',
            component: App2,
        },
        {
            path: 'regist',
            component: App1,
        }
    ],
}

export default routers