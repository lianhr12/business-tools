/**
 * @desc   现金额转大写
 * @param  {Number} n 
 * @return {String}
 */
export function digitUppercase(n: number): string {
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
};


/**
 * 保护手机号码隐私，隐蔽中间四位数
 * @param phone {String}
 * @returns {String} 结果如：138****8888
 */
export function replacePhoneNum(phone: string): string {
    phone = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    return phone;
}

/**
 * 去除首尾空格处理，trim('   test    ')
 * @param str {String} 文本内容
 * @returns {String} 处理后的结果
 */
export function trim(str: string): string {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}