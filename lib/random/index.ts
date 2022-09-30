/**
 * 生成指定范围[min, max]的随机数
 * 
 * @category Random
 * @param min 随机数起始值
 * @param max 随机数结束值
 * @example 
 * ```typescript
 * import { randomNum } from '@lianhr12/business-tools';
 * // 获取1-100随机值
 * const num = randomNum(1, 100);
 * ```
 * @return 
 */
export function randomNum(min:number, max: number):number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * 随机生成颜色
 * @category Random
 * @return eg: #757575
 */
export function randomColor(): string {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
