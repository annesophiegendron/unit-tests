export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === '') {
    return false
  } else if (type === [0, 1]) {
    return stringArrayOrObject === []
  } else if (type === []) {
    return false
  } else if (type === ({ name: " " })) {
    return stringArrayOrObject === {}
  } else if (type === {}) {
    return false
  }
}
