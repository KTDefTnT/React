// 最后一个中间件拿到dispatch之后触发  next在之前指代上一个中间件 最后一个中间件中 next为dispatch
export default function thunk({ getState }){
  return next => action => {
    console.log(action.type + "执⾏了！"); //sy-log
    const prevState = getState();
    console.log("prev state", prevState); //sy-log
    next(action);
    console.log("next state", getState()); //sy-log
  }
} 