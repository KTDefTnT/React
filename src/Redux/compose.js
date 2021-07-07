/**
 *
 * @param  {...any} funcs 中间件
 * @returns 将中间件组合起来，返回一个新的函数
 */
export default function compose(...funcs) {
  console.log("funcs", funcs);
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
