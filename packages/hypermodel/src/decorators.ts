export function nonenum({ propValue: value }) {
  return function(target: any, propertyKey: string) {
    const descriptor =
      Object.getOwnPropertyDescriptor(target, propertyKey) || {}
    descriptor.enumerable = false
    descriptor.value = value
    Object.defineProperty(target, propertyKey, descriptor)
  }
}
