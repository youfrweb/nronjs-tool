
/**
 * 验证身份证号码是否有效
 * @param {string} idCardStr - 身份证号码字符串
 * @returns {boolean} 如果身份证号码有效则返回 true，否则返回 false
 */
export function validIdCard(idCardStr: string): boolean {
  const idCardRegExp =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return idCardRegExp.test(idCardStr);
}

/**
 * 验证电子邮件地址是否有效
 * @param {string} email - 电子邮件地址字符串
 * @returns {boolean} 如果电子邮件地址有效则返回 true，否则返回 false
 */
export function validEmail(email: string): boolean {
  // eslint-disable-next-line
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * 验证 URL 是否有效
 * @param {string} url - URL 字符串
 * @returns {boolean} 如果 URL 有效则返回 true，否则返回 false
 */
export function validURL(url: string): boolean {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}