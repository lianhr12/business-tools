/**
 *  url参数转对象
 * @param  {String} url URL地址，默认值: window.location.href
 * @return {Object} 
 */
 export function parseQueryString(url=window.location.href) {
  if(url.indexOf('?') === -1) {
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
export function stringfyQueryString(obj):string {
  if (!obj) return '';
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

