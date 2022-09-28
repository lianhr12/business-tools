/**
 * 根据name获取cookie值
 * @param name {String} 
 * @returns {String}
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
 * @param name {String} cookie name
 * @param value {string} 值
 * @param days {Number} 过期有效天数
 */
export function setCookie(name: string, value: string, days: number): void {
  let date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
}

/**
 * 根据name删除cookie
 * @param name {String} cookie name
 */
export function removeCookiesByName(name: string): void {
  // 设置已过期，系统会立即删除cookie
  setCookie(name, '1', -1);
}

