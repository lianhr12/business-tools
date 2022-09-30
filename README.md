# business-tools
[![npm](https://img.shields.io/npm/v/@lianhr12/business-tools.svg)](https://www.npmjs.com/package/@lianhr12/business-tools)
[![LICENSE MIT](https://img.shields.io/npm/l/@lianhr12/business-tools.svg)](https://www.npmjs.com/package/@lianhr12/business-tools) 

> 业务开发常用工具方法封装集合，业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

`注意：工具库依赖于浏览器运行环境，不可直接使用到nodejs环境，否则部分方法会直接报错`

## 安装使用
使用npm或者yarn快速安装
```
npm install @lianhr12/business-tools -S
yarn add @lianhr12/business-tools -S
```

根据模块使用工具库，下面简单举例：
ES Module
```javascript
import businessTool from '@lianhr12/business-tools';
// 获取系统信息
const os = businessTool.getOSInfo();
```

CommonJS
```javascript
const businessTool = require('@lianhr12/business-tools');
// 获取系统信息
const os = businessTool.getOSInfo();
```

浏览器，需要下载dist目录下的business-tools.umd.js文件，并页面引用
```html
<script src="business-tools.umd.js"></script>
<script>
    var OS = businessTool.getOSInfo();
</script>
```

**推荐使用方法**  
```javascript
// 为减少文件体积，推荐按需引入使用到方法
import { getOSInfo } from '@lianhr12/business-tools';
// 获取系统信息
const os = getOSInfo();
```

## API文档
详细API文档内容，请查阅[这里](https://docs.hrope.cn/)
### Cookie 
- 根据name读取Cookie &emsp;&emsp; function getCookieByName(name: string): string; 
- 根据name删除Cookie &emsp;&emsp;removeCookiesByName(name: string): void;
- 添加Cookie &emsp;&emsp;function setCookie(name: string, value: string

### Device
- 根据UA信息获取浏览器信息 &emsp;&emsp;function getBrowserInfo(): IBrowserInfo [name: string; version: string]
- 获取操作系统类型 &emsp;&emsp; getOSInfo(): string

### DOM
- 判断元素是否包含指定class &emsp;&emsp;hasClass(el: Element, className: string): boolean;
- 为元素添加class &emsp;&emsp; function addClass(el: Element, className: string): void;
- 删除元素指定的className &emsp;&emsp; function removeClass(el: Element, className: string): void;
- 获取滚动条距顶部的距离 &emsp;&emsp; function getScrollTop(): number;
- 设置滚动条距顶部的距离 &emsp;&emsp; setScrollTop(value: any): number;
- 在${duration}时间内，滚动条平滑滚动到${to}指定位置 &emsp;&emsp;function scrollTo(to: number, duration: number): void;

### Helper
- 根据键盘keycode获得键名 &emsp;&emsp;  function getKeyName(keycode: any): any;

### Object
- 判断`obj`是否为空 &emsp;&emsp; isEmptyObject(obj: any): boolean;
- 深拷贝，支持常见类型 &emsp;&emsp; function deepClone(values: any): any;

### Random
- 生成指定范围[min, max]的随机数 &emsp;&emsp; randomNum(min: number, max: number): number;
- 随机生成颜色 function randomColor(): string;

### Regexp
- 判断是否为16进制颜色，rgb 或 rgba  &emsp;&emsp;function isColor(str: string): boolean;
- 判断是否为邮箱地址 &emsp;&emsp;  isEmail(str: string): boolean;
- 判断是否为身份证号  &emsp;&emsp;function isIdCard(str: string): boolean;
- 判断是否为手机号  &emsp;&emsp; function isPhoneNum(str: string): boolean;
- 判断是否为URL地址 &emsp;&emsp; function isUrl(str: string): boolean;

### String
- 现金额转大写 &emsp;&emsp; digitUppercase(n: number): string;
- 手机号隐私处理（中间四位数隐藏）&emsp;&emsp; function replacePhoneNum(phone: string): string;
- 去除首尾空格处理，trim('   test    ')&emsp;&emsp; function trim(str: string): string;

### Support
- 判断浏览器是否支持webP格式图片&emsp;&emsp;function hasSupportWebP(): boolean;

### Time
- 格式化${startTime}距现在的已过时间 &emsp;&emsp;formatPassTime(startTime: number): string;
- 格式化现在距${endTime}的剩余时间 &emsp;&emsp; function formatRemainTime(endTime: number): string;
- 是否为闰年  &emsp;&emsp; isLeapYear(year: number): boolean;
- 判断是否为同一天 &emsp;&emsp; function isSameDay(date1: Date, date2?: Date): boolean;
-  获取指定日期月份的总天数 &emsp;&emsp;  function monthDays(time: Date): number;
- ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0。 &emsp;&emsp; function timeLeft(startTime: Date | string, endTime: Date | string): {
    d: number;
    h: number;
    m: number;
    s: number;
} | undefined;

### URL
-  url query参数字符转对象 &emsp;&emsp;function parseQueryString(url?: string): {};
- 对象序列化为url query参数字符 &emsp;&emsp; function stringfyQueryString(obj: any): string;

