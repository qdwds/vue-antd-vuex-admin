export const  error = [
    {
        path:"/:pathMatch(.*)*",
        name:"404",
        component:()=> import("@/views/error/404.vue"),
        meta:{
            title:"页面不存在"
        }
    }
]