/**
 * @category Support
 * @desc 判断浏览器是否支持webP格式图片
 * @return Boolean值
 */
export function hasSupportWebP(): boolean {
  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
}