/**
 * 判断元素是否包含指定class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 * @returns boolean
 */
export declare function hasClass(el: Element, className: string): boolean;
/**
 * 为元素添加class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
export declare function addClass(el: Element, className: string): void;
/**
 * 删除元素指定的className
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
export declare function removeClass(el: Element, className: string): void;
/**
 * @desc 获取滚动条距顶部的距离
 */
export declare function getScrollTop(): number;
/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
export declare function setScrollTop(value: any): number;
export declare const requestAnimFrame: (callback: FrameRequestCallback) => void;
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 滚动到什么距离
 * @param {Number} duration 动画持续多久完成
 */
export declare function scrollTo(to: number, duration: number): void;
