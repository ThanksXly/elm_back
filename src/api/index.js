import ajax from "./ajax";
import da from "element-ui/src/locale/lang/da";

//注册与登录
export const reqSaveUser = (data) => ajax('/elm_back/save_user',data,'POST');

//验证cookie
export const reqCookie = (data) => ajax('/elm_back/cookies',data);

//保存商铺
export const reqSaveShop = (data) => ajax('/elm_back/save_shop',data,'POST');

//获取用户列表
export const reqUserList = (data) => ajax('/elm_back/get_userList',data);

//获取商铺列表
export const reqShopList = (data) => ajax('/elm_back/get_shopList',data);
