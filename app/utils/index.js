export const compose = (...fns) => {
  const [tailFn, ...restFns] = fns.reverse()

  return (...args) =>
    restFns.reduce(
      (value, fn) => fn(value),
      tailFn(...args),
    )
}

export const pipe = (...fns) => compose(...fns.reverse())

export const curry = fn =>
  (...args) =>
    args.length < fn.length
      ? (...rest) => curry(fn)(...args, ...rest)
      : fn(...args)

export const thrush = (...val) => fn => fn(...val)
export const mapThrush = curry((fnArr, value) => fnArr.map(thrush(value)))
export const map = curry((fn, arr) => arr.map(fn))
export const tap = curry((fn, value) => (fn(value), value)) // eslint-disable-line no-sequences
export const reduce = curry((fn, initial, arr) => arr.reduce(fn, initial))
export const filter = curry((fn, arr) => arr.filter(fn))
export const reject = curry((fn, arr) => arr.filter((e, i) => !fn(e, i)))

export const blacklist = curry((list, obj) => pipe(
  Object.keys,
  reject(key => list.includes(key)),
  reduce((h, c) => ({ ...h, [c]: obj[c] }), {}),
)(obj))
