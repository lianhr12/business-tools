/**
 * 根据name获取cookie值
 * @param name {String}
 * @returns {String}
 */
export declare function getCookieByName(name: string): string;
/**
 * 设置cookie
 * @param name {String} cookie name
 * @param value {string} 值
 * @param days {Number} 过期有效天数
 */
export declare function setCookie(name: string, value: string, days: number): void;
/**
 * 根据name删除cookie
 * @param name {String} cookie name
 */
export declare function removeCookiesByName(name: string): void;
