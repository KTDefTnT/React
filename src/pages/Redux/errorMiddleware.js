const errorMiddleware = store => next => action => {
  try {
    console.log('store', store.getState());
    next(action);
  } catch(e) {
    console.log('e', e);
  }
}

export default errorMiddleware;