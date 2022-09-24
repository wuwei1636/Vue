//该文件专门用于创建整个应用的路由器
// 引入路由
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

// 创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'},
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{title:'新闻',isAuth:true},
                    beforeEnter:((to, from, next) => {
                        if(to.meta.isAuth){  // 判断是否需要鉴定权限
                            if(localStorage.getItem('school') === '嵩阳高中'){
                                next()
                            }else {
                                alert('无权限访问')
                            }
                        }else {
                            next()
                        }
                    })
                },
                {
                    path:'message',
                    component:Message,
                    meta:{title:'消息',isAuth:true},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            meta:{title:'详情',isAuth:true},
                            component: Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件,一般不用
                            // props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            //props的第三种写法，值为函数
                            props($route){
                              return {
                                  id:$route.query.id,
                                  title:$route.query.title
                              }
                            }

                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫，每次路由切换之前被调用
// to 目标路由  from 来自哪个路由 ， next 放行
// router.beforeEach((to, from, next) => {
//     if(to.meta.isAuth){  // 判断是否需要鉴定权限
//         if(localStorage.getItem('school') === '嵩阳高中'){
//             next()
//         }else {
//             alert('无权限访问')
//         }
//     }else {
//         next()
//     }
// })

//后置路由守卫 ,每次路由切换后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '硅谷系统'
})

export  default  router