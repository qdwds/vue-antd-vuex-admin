import { Router } from "../store/modules/user/typings";


//  获取到的数据转为树结构
export const formRouterTree = (data: Router[]) => {
    //  获取最外层路由
    let parents = data.filter(p => p.uuid === 0);
    //  获取内层路由
    let childrens = data.filter(c => c.uuid !== 0);

    dataThree(parents, childrens);
    //  转为树结构
    function dataThree(parents: Router[], childrens: Router[]) {
        parents.map(p => {
            childrens.map((c, i) => {
                if (c.uuid === p.id) {
                    let _c = JSON.parse(JSON.stringify(childrens));
                    _c.splice(i, 1);
                    dataThree([c], _c);  //  递归获取树结构

                    //  生成树
                    if (p.children) {
                        p.children.push(c);
                    } else {
                        p.children = [c];
                    }
                }
            })
        })
    }
    return parents
}

//  转为正真得树结构
export const generateRouters = function (userRouters: Router[]) {
    let newRoutes = userRouters.map(r => {
        //  生成路由
        let routes: any = {
            path: r.path,
            name: r.name,
            component: () => import(`../views${r.link}/index.vue`),

        }
        //  生成内层路由
        if (r.children) {
            routes.children = generateRouters(r.children)
        }
        return routes;
    })
    return newRoutes;
}