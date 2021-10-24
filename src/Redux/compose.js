// 将函数组合为当前函数返回： (...args) => f1(f2(f3(..args)))  
// compose(functions)(dispatch) 其中dispatch则为args的实参
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}