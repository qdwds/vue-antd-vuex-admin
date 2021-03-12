/**
 * axios 请求状态返回
 */
import { message } from "ant-design-vue"
import { useRouter } from "vue-router";

const error = message.error;
export const requestStatusCode = (status: number): void => {
    switch (status) {
        case 400:
            error(('code.error400'));
            break;
        case 401:
            const router = useRouter();
            error(('code.error401'));
            router.push({
                path: "/login"
            })
            break;
        case 403:
            error(('code.error403'));
            break;
        // 404请求不存在
        case 404:
            error(('code.error404'));
            break;
        case 405:
            error(('code.error405'));
            break;
        case 408:
            error(('code.error408'));
            break;
        case 500:
            error(('code.error500'));
            break;
        case 501:
            error(('code.error501'));
            break;
        case 502:
            error(('code.error502'));
            break;
        case 503:
            error(('code.error503'));
            break;
        case 504:
            error(('code.error504'));
            break;
        case 505:
            error(('code.error505'));
            break;
        default:
            break;
    }
}