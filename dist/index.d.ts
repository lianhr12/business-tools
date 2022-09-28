/**
 * 根据name获取cookie值
 * @param name {String}
 * @returns {String}
 */
declare function getCookieByName(name: string): string;
/**
 * 设置cookie
 * @param name {String} cookie name
 * @param value {string} 值
 * @param days {Number} 过期有效天数
 */
declare function setCookie(name: string, value: string, days: number): void;
/**
 * 根据name删除cookie
 * @param name {String} cookie name
 */
declare function removeCookiesByName(name: string): void;

interface IBrowserInfo {
    name: string;
    version: string;
}
/**
 * 根据UA信息获取浏览器信息
 * @returns {
 *  name: string; // 浏览器
 *  version: string; // 浏览器版本
 * }
 */
declare function getBrowserInfo(): IBrowserInfo;
/**
 * 获取操作系统类型
 * @returns
 */
declare function getOSInfo(): string;

/**
 * 判断元素是否包含指定class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 * @returns boolean
 */
declare function hasClass(el: Element, className: string): boolean;
/**
 * 为元素添加class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
declare function addClass(el: Element, className: string): void;
/**
 * 删除元素指定的className
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
declare function removeClass(el: Element, className: string): void;
/**
 * @desc 获取滚动条距顶部的距离
 */
declare function getScrollTop(): number;
/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
declare function setScrollTop(value: any): number;
declare const requestAnimFrame: (callback: FrameRequestCallback) => void;
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 滚动到什么距离
 * @param {Number} duration 动画持续多久完成
 */
declare function scrollTo(to: number, duration: number): void;

/**
* @desc 根据keycode获得键名
* @param  {Number} keycode
* @return {String}
*/
declare function getKeyName(keycode: any): any;

/**
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
declare function isEmptyObject(obj: any): boolean;
/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
declare function deepClone(values: any): any;

/**
 * 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
declare function randomNum(min: number, max: number): number;
/**
 * 随机生成颜色
 * @return {String}
 */
declare function randomColor(): string;

/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean}
 */
declare function isColor(str: string): boolean;
/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
declare function isEmail(str: string): boolean;
/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
declare function isIdCard(str: string): boolean;
/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
declare function isPhoneNum(str: string): boolean;
/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
declare function isUrl(str: string): boolean;

/**
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
declare function digitUppercase(n: number): string;

/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
declare function hasSupportWebP(): boolean;

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
declare function formatPassTime(startTime: number): string;
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
declare function formatRemainTime(endTime: number): string;
/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
declare function isLeapYear(year: number): boolean;
/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
declare function isSameDay(date1: Date, date2?: Date): boolean;
/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
*/
declare function monthDays(time: Date): number;
/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
declare function timeLeft(startTime: Date | string, endTime: Date | string): {
    d: number;
    h: number;
    m: number;
    s: number;
} | undefined;

/**
 *  url参数转对象
 * @param  {String} url URL地址，默认值: window.location.href
 * @return {Object}
 */
declare function parseQueryString(url?: string): {};
/**
 * 对象序列化
 * @param  {Object} obj
 * @return {String}
 */
declare function stringfyQueryString(obj: any): string;

export { addClass, deepClone, digitUppercase, formatPassTime, formatRemainTime, getBrowserInfo, getCookieByName, getKeyName, getOSInfo, getScrollTop, hasClass, hasSupportWebP, isColor, isEmail, isEmptyObject, isIdCard, isLeapYear, isPhoneNum, isSameDay, isUrl, monthDays, parseQueryString, randomColor, randomNum, removeClass, removeCookiesByName, requestAnimFrame, scrollTo, setCookie, setScrollTop, stringfyQueryString, timeLeft };
