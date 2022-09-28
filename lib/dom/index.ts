
/**
 * 判断元素是否包含指定class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className 
 * @returns boolean
 */
export function hasClass(el: Element, className: string): boolean {
  return (new RegExp('(\\s|^)' + className + '(\\s|$)')).test(el.className);
}

/**
 * 为元素添加class
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className 
 */
export function addClass(el: Element, className: string) {
  if (!hasClass(el, className)) {
    el.className += ' ' + className;
  }
}

/**
 * 删除元素指定的className
 * @param el {HTMLElement} 目标元素
 * @param className {String} 指定className
 */
export function removeClass(el: Element, className: string) {
  if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + el + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

/**
 * @desc 获取滚动条距顶部的距离
 */
export function getScrollTop(): number {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}


/**
 * 
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
export function setScrollTop(value): number {
  window.scrollTo(0, value);
  return value;
}


export const requestAnimFrame = (function () {
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
export function scrollTo(to: number, duration: number): void {
  if (duration < 0) {
    setScrollTop(to);
    return
  }
  const diff = to - getScrollTop();
  if (diff === 0) return
  const step = diff / duration * 10;
  requestAnimFrame(
    function () {
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