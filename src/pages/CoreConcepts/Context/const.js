import React from "react";
// ThemeContext，默认的 className 是 “red” 值
export const ThemeContext = React.createContext({ className: "red" });
export const UserContext = React.createContext({ name: '焦糖瓜子' });