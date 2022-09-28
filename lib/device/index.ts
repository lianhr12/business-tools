interface IBrowserInfo {
  name: string; // 浏览器名称
  version: string; // 浏览器版本
}

/**
 * 根据UA信息获取浏览器信息
 * @returns {
 *  name: string; // 浏览器
 *  version: string; // 浏览器版本
 * }
 */
export function getBrowserInfo(): IBrowserInfo {
  const browserInfo = {} as IBrowserInfo;
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

  for( let i=0, len = matchRegs.length; i < len; i++) {
    const item = matchRegs[i];
    const result = ua.match(item.value);
    if (result) {
      browserInfo.name = item.name;
      browserInfo.version = result[1];
      break;
    }
  };
  return browserInfo;
}

/**
 * 获取操作系统类型
 * @returns 
 */
export function getOSInfo(): string{
  const userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
  const appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
  if (/android/i.test(userAgent)) return 'android'
  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsphone'
  if (/mac/i.test(appVersion)) return 'macos'
  if (/win/i.test(appVersion)) return 'windows'
  if (/linux/i.test(appVersion)) return 'linux'
}