const loggerMiddleware = store => next => action => {
  console.log(`开始执行${action.type}`);
  next(action);
  console.log(`执行完毕${action.type}`);
}

export default loggerMiddleware;