/**
 * @category Object
 * @desc   判断`obj`是否为空
 * @param obj 对象|数组
 * @return boolean 值
 */
export function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
      return false
  return !Object.keys(obj).length
}

/**
 * @category Object
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
export function deepClone(values) {
  let copy;

  if (null == values || "object" != typeof values) return values;

  if (values instanceof Date) {
      copy = new Date();
      copy.setTime(values.getTime());
      return copy;
  }

  if (values instanceof Array) {
      copy = [];
      for (let i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
      }
      return copy;
  }

  if (values instanceof Object) {
      copy = {};
      for (const attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
      }
      return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}