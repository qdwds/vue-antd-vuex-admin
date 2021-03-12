import instance from "../../utils/http";

export const getRoutes = (uuid:number)=>{
    return instance({
        url:"/auth/routes",
        method:"POST",
        data:{
            uuid
        }
    })
}