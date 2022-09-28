/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
export declare function formatPassTime(startTime: number): string;
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
export declare function formatRemainTime(endTime: number): string;
/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
export declare function isLeapYear(year: number): boolean;
/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
export declare function isSameDay(date1: Date, date2?: Date): boolean;
/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
*/
export declare function monthDays(time: Date): number;
/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
export declare function timeLeft(startTime: Date | string, endTime: Date | string): {
    d: number;
    h: number;
    m: number;
    s: number;
} | undefined;
