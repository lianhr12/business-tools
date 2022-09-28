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
export declare function getBrowserInfo(): IBrowserInfo;
/**
 * 获取操作系统类型
 * @returns
 */
export declare function getOSInfo(): string;
export {};
