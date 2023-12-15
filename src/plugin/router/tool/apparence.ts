import { RouteRecordName } from "vue-router";
import { COMPANY, TEST } from "../../../conf"

const FAVICON_NAME: string = 'no_favicon'

// 修改 HTML title
const upd_title = () => document.title = COMPANY.name;

// 修改 HTML 图标
const upd_icon = () => {
    const ink: ONE | null = document.querySelector("link[rel*='icon']");
    if (ink) {
        ink.rel = 'icon';
        ink.href = '/IOGO.png';
    }
}

export const custom_company_head = (to_name: RouteRecordName) => {

    if (to_name === FAVICON_NAME) {

        TEST ? console.log("修改页面信息") : undefined;
        upd_icon()
        upd_title()
    }
}