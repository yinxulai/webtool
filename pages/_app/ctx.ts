import React from "react";
import { isBrowserEnv } from "../../utils";
import { Controller as NavBarController } from "../components/navbar/controller";


interface AppContextValue {
  theme: any // 主题
  navbar: NavBarController // 状态栏控制器
  sidebar: any // 侧边栏控制器
}

class Controller {

}

export const defaultAppContext = {
  theme: new Controller(), // 主题控制器
  navbar: new NavBarController(), // 状态栏控制器
  sidebar: new Controller() // 侧边栏控制器
}

if (isBrowserEnv()) {
  (window as any).AppContext = defaultAppContext
}
export const AppContext = React.createContext<AppContextValue>(defaultAppContext);
