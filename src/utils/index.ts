// 导出一个函数，用于过滤空字段
export function filterEmptyFields(model: Record<string, any>) {
  // 遍历model中的每一个key
  Object.keys(model).forEach((key) => {
    // 如果model[key]的值为空字符串，则删除该key
    if (model[key] === '') {
      delete model[key]
    }
    // 如果model[key]的值为字符串，则去除字符串两端的空格
    if (typeof model[key] === 'string') {
      model[key] = model[key].trim()
    }
    // 如果model[key]的值为对象，则递归调用filterEmptyFields函数
    if (typeof model[key] === 'object' && model[key] !== null) {
      filterEmptyFields(model[key])
    }
  })
  // 返回过滤后的model
  return model
}

// ts is关键字 https://www.jianshu.com/p/57df3cb66d3d
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}
