/**
 * 根据name获取cookie值
 * @category Cookie
 * @param name cookie名称
 * @returns 返回结果，没有找到为空
 * @example
 * ```typescript
 * import { getOSInfo } from '@lianhr12/business-tools';
 * const cookie = getCookieByName("token");
 * console.log(cookie);
 * ```
 */
export function getCookieByName(name: string): string {
  let arr = document.cookie.replace(/\s/g, "").split(";");
  for (let i=0; i<arr.length; i++) {
    let tempArr = arr[i].split("=");
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
}

/**
 * 设置cookie
 * @category Cookie
 * @param name cookie name
 * @param value cookie值
 * @param days 过期有效天数
 * @example
 * ```typescript
 * import { setCookie } from '@lianhr12/business-tools';
 * // 设置1天有效期
 * const cookie = setCookie("token", "xxxx", 1);
 * ``` 
 */
export function setCookie(name: string, value: string, days: number): void {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
}

/**
 * 根据name删除cookie
 * @category Cookie
 * @param name cookie name
 * @example
 * ```typescript
 * import { removeCookiesByName } from '@lianhr12/business-tools';
 * // 删除cookie值
 * const cookie = removeCookiesByName("token");
 * ``` 
 */
export function removeCookiesByName(name: string): void {
  // 设置已过期，系统会立即删除cookie
  setCookie(name, '1', -1);
}

