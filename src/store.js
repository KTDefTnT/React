// import { combineReducers, createStore } from "redux";
import { createStore, combineReducers } from './Redux/index'

// reducer 纯函数
const countReducer = function (count = 0, action) {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

const userReducer = function (name = "焦糖瓜子", action) {
  let currentName = action.name || name;
  switch (action.type) {
    case "ENGLISH":
      return `ENGLISH：${currentName}`;
    case "CHINESE":
      return `中文：${currentName}`;
    default:
      return "无名氏";
  }
};

const store = createStore(combineReducers({ count: countReducer, user: userReducer }));
export default store;