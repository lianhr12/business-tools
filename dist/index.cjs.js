'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 根据name获取cookie值
 * @param name {String}
 * @returns {String}
 */
function getCookieByName(name) {
    let arr = document.cookie.replace(/\s/g, "").split(";");
    for (let i = 0; i < arr.length; i++) {
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
function setCookie(name, value, days) {
    let date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString();
}
/**
 * 根据name删除cookie
 * @param name {String} cookie name
 */
function removeCookiesByName(name) {
    // 设置已过期，系统会立即删除cookie
    setCookie(name, '1', -1);
}

/**
 * 根据UA信息获取浏览器信息
 * @returns {
 *  name: string; // 浏览器
 *  version: string; // 浏览器版本
 * }
 */
function getBrowserInfo() {
    const browserInfo = {};
    const ua = navigator.userAgent.toLowerCase();
    const matchRegs = [
        {
            name: 'ie',
            value: /rv:([\d.]+)\) like gecko/
        },
        {
            name: 'ie',
            value: /msie ([\d\.]+)/
        },
        {
            name: 'edge',
            value: /edge\/([\d\.]+)/
        },
        {
            name: 'firefox',
            value: /firefox\/([\d\.]+)/
        },
        {
            name: 'opera',
            value: /(?:opera|opr).([\d\.]+)/
        },
        {
            name: 'chrome',
            value: /chrome\/([\d\.]+)/
        },
        {
            name: 'safari',
            value: /version\/([\d\.]+).*safari/
        }
    ];
    for (let i = 0, len = matchRegs.length; i < len; i++) {
        const item = matchRegs[i];
        const result = ua.match(item.value);
        if (result) {
            browserInfo.name = item.name;
            browserInfo.version = result[1];
            break;
        }
    }
    return browserInfo;
}
/**
 * 获取操作系统类型
 * @returns
 */
function getOSInfo() {
    const userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    const appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent))
        return 'ios';
    if (/android/i.test(userAgent))
        return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent))
        return 'windowsphone';
    if (/mac/i.test(appVersion))
        return 'macos';
    if (/win/i.test(appVersion))
        return 'windows';
    if (/linux/i.test(appVersion))
        return 'linux';
}

/**
 * 判断元素是否包含指定class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 * @returns boolean
 */
function hasClass(el, className) {
    return (new RegExp('(\\s|^)' + className + '(\\s|$)')).test(el.className);
}
/**
 * 为元素添加class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
function addClass(el, className) {
    if (!hasClass(el, className)) {
        el.className += ' ' + className;
    }
}
/**
 * 删除元素指定的className
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
function removeClass(el, className) {
    if (hasClass(el, className)) {
        const reg = new RegExp('(\\s|^)' + el + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
/**
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}
/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
function setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
}
const requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 滚动到什么距离
 * @param {Number} duration 动画持续多久完成
 */
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return;
    }
    const diff = to - getScrollTop();
    if (diff === 0)
        return;
    const step = diff / duration * 10;
    requestAnimFrame(function () {
        if (Math.abs(step) > Math.abs(diff)) {
            setScrollTop(getScrollTop() + diff);
            return;
        }
        setScrollTop(getScrollTop() + step);
        if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
            return;
        }
        scrollTo(to, duration - 16);
    });
}

const keyCodeMap = {
    8: 'Backspace',
    9: 'Tab',
    13: 'Enter',
    16: 'Shift',
    17: 'Ctrl',
    18: 'Alt',
    19: 'Pause',
    20: 'Caps Lock',
    27: 'Escape',
    32: 'Space',
    33: 'Page Up',
    34: 'Page Down',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    42: 'Print Screen',
    45: 'Insert',
    46: 'Delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    91: 'Windows',
    93: 'Right Click',
    96: 'Numpad 0',
    97: 'Numpad 1',
    98: 'Numpad 2',
    99: 'Numpad 3',
    100: 'Numpad 4',
    101: 'Numpad 5',
    102: 'Numpad 6',
    103: 'Numpad 7',
    104: 'Numpad 8',
    105: 'Numpad 9',
    106: 'Numpad *',
    107: 'Numpad +',
    109: 'Numpad -',
    110: 'Numpad .',
    111: 'Numpad /',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'Num Lock',
    145: 'Scroll Lock',
    182: 'My Computer',
    183: 'My Calculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
};
/**
* @desc 根据keycode获得键名
* @param  {Number} keycode
* @return {String}
*/
function getKeyName(keycode) {
    if (keyCodeMap[keycode]) {
        return keyCodeMap[keycode];
    }
    else {
        console.log('Unknow Key(Key Code:' + keycode + ')');
        return '';
    }
}

/**
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false;
    return !Object.keys(obj).length;
}
/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
function deepClone(values) {
    let copy;
    // Handle the 3 simple types, and null or undefined
    if (null == values || "object" != typeof values)
        return values;
    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy;
    }
    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (let i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i]);
        }
        return copy;
    }
    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (const attr in values) {
            if (values.hasOwnProperty(attr))
                copy[attr] = deepClone(values[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 * 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 随机生成颜色
 * @return {String}
 */
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean}
 */
function isColor(str) {
    return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str);
}
/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
}
/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhoneNum(str) {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}
/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase(n) {
    const fraction = ['角', '分'];
    const digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    const head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
}

/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function hasSupportWebP() {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
    const currentTime = new Date().getTime();
    const time = currentTime - startTime;
    const day = Math.floor(time / (1000 * 60 * 60 * 24));
    const hour = Math.floor(time / (1000 * 60 * 60));
    const min = Math.floor(time / (1000 * 60));
    const month = Math.floor(day / 30);
    const year = Math.floor(month / 12);
    if (year)
        return year + "年前";
    if (month)
        return month + "个月前";
    if (day)
        return day + "天前";
    if (hour)
        return hour + "小时前";
    if (min)
        return min + "分钟前";
    else
        return '刚刚';
}
/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
    const startDate = new Date(); //开始时间
    const endDate = new Date(endTime); //结束时间
    const t = endDate.getTime() - startDate.getTime(); //时间差
    let d = 0;
    let h = 0;
    let m = 0;
    let s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}
/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */
function isLeapYear(year) {
    if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}
/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
function isSameDay(date1, date2) {
    if (!date2) {
        date2 = new Date();
    }
    let date1_year = date1.getFullYear();
    let date1_month = date1.getMonth() + 1;
    let date1_date = date1.getDate();
    let date2_year = date2.getFullYear();
    let date2_month = date2.getMonth() + 1;
    let date2_date = date2.getDate();
    return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
}
/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
*/
function monthDays(time) {
    time = new Date(time);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    return new Date(year, month, 0).getDate();
}
/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
function timeLeft(startTime, endTime) {
    if (!startTime || !endTime) {
        return;
    }
    let startDate, endDate;
    if (startTime instanceof Date) {
        startDate = startTime;
    }
    else {
        startDate = new Date(startTime.replace(/-/g, '/')); //开始时间
    }
    if (endTime instanceof Date) {
        endDate = endTime;
    }
    else {
        endDate = new Date(endTime.replace(/-/g, '/')); //结束时间
    }
    const t = endDate.getTime() - startDate.getTime();
    let d = 0, h = 0, m = 0, s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 3600 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return { d, h, m, s };
}

/**
 *  url参数转对象
 * @param  {String} url URL地址，默认值: window.location.href
 * @return {Object}
 */
function parseQueryString(url = window.location.href) {
    if (url.indexOf('?') === -1) {
        return {};
    }
    const search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    const queryStrArr = search.split('&');
    const query = {};
    for (let i = 0, len = queryStrArr.length; i < len; i++) {
        const pair = queryStrArr[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}
/**
 * 对象序列化
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {
    if (!obj)
        return '';
    const pairs = [];
    for (const key in obj) {
        const value = obj[key];
        if (value instanceof Array) {
            for (let i = 0; i < value.length; ++i) {
                pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
            }
            continue;
        }
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return pairs.join('&');
}

exports.addClass = addClass;
exports.deepClone = deepClone;
exports.digitUppercase = digitUppercase;
exports.formatPassTime = formatPassTime;
exports.formatRemainTime = formatRemainTime;
exports.getBrowserInfo = getBrowserInfo;
exports.getCookieByName = getCookieByName;
exports.getKeyName = getKeyName;
exports.getOSInfo = getOSInfo;
exports.getScrollTop = getScrollTop;
exports.hasClass = hasClass;
exports.hasSupportWebP = hasSupportWebP;
exports.isColor = isColor;
exports.isEmail = isEmail;
exports.isEmptyObject = isEmptyObject;
exports.isIdCard = isIdCard;
exports.isLeapYear = isLeapYear;
exports.isPhoneNum = isPhoneNum;
exports.isSameDay = isSameDay;
exports.isUrl = isUrl;
exports.monthDays = monthDays;
exports.parseQueryString = parseQueryString;
exports.randomColor = randomColor;
exports.randomNum = randomNum;
exports.removeClass = removeClass;
exports.removeCookiesByName = removeCookiesByName;
exports.requestAnimFrame = requestAnimFrame;
exports.scrollTo = scrollTo;
exports.setCookie = setCookie;
exports.setScrollTop = setScrollTop;
exports.stringfyQueryString = stringfyQueryString;
exports.timeLeft = timeLeft;
