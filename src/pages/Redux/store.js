// import { combineReducers, createStore } from "redux";
import { createStore, combineReducers, applyMiddleware } from '../../Redux/index'
import errorMiddleware from './errorMiddleware';
import loggerMiddleware from './loggerMiddleware';

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

// const userReducer = function (name = "焦糖瓜子", action) {
//   let currentName = action.name || name;
//   switch (action.type) {
//     case "ENGLISH":
//       return `ENGLISH：${currentName}`;
//     case "CHINESE":
//       return `中文：${currentName}`;
//     default:
//       return "无名氏";
//   }
// };

// let store = createStore(countReducer);

// const next = store.dispatch;
// applyMiddleware第一版 记录日志
// store.dispatch = action => {
//   console.log(`开始执行${action.type}`);
//   next(action);
//   console.log(`执行完毕${action.type}`);
// }


// // 新需求 记录异常
// store.dispatch = action => {
//   try {
//     console.log('store', store.getState());
//     next(action);
//   } catch(e){
//     console.log('e', e);
//   }
// }

// loggerMiddleware 需要接收一个next，进行升阶
// const loggerMiddleware = next => action => {
//   console.log(`开始执行${action.type}`);
//   next(action);
//   console.log(`执行完毕${action.type}`);
// }

// const errorMiddleware = next => action => {
//    try {
//     console.log('store', store.getState());
//       next(action);
//    } catch(e) {
//     console.log('e', e);
//    }
// }

/**
 * 
 * @param  {...any} funcs 中间件
 * @returns 将中间件组合起来，返回一个新的函数
 */
// function compose(...funcs) {
//   console.log('funcs', funcs);
//   if (funcs.length === 0) {
//     return arg => arg;
//   }

//   if (funcs.length === 1) {
//     return funcs[0];
//   }

//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }

// store.dispatch = compose(errorMiddleware(store), loggerMiddleware(store))(next);

// store = applyMiddleware(errorMiddleware, loggerMiddleware)(createStore)(countReducer);

const store = createStore(countReducer, applyMiddleware(errorMiddleware, loggerMiddleware));
export default store;
// 1 50,100厂钉子