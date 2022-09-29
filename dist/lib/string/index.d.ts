/**
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
export declare function digitUppercase(n: number): string;
/**
 * 保护手机号码隐私，隐蔽中间四位数
 * @param phone {String}
 * @returns {String} 结果如：138****8888
 */
export declare function replacePhoneNum(phone: string): string;
/**
 * 去除首尾空格处理，trim('   test    ')
 * @param str {String} 文本内容
 * @returns {String} 处理后的结果
 */
export declare function trim(str: string): string;
