/*
 * @Author: youfanrong 737064439@qq.com
 * @Description: 
 * @Date: 2023-11-21 15:17:49
 * @LastEditors: youfanrong 737064439@qq.com
 * @LastEditTime: 2024-01-09 11:29:20
 */
import dayjs from 'dayjs';
import Cookies from 'js-cookie'

export default {
  /**
   * dayjs整合
   * @文档同 [dayjs文档 ](https://www.npmjs.com/package/dayjs)
   */
  day: dayjs,
  /**
   * js-cookie整合
   * @文档同 [js-cookie文档 ](https://www.npmjs.com/package/js-cookie)
   */
  cookie: Cookies,
  /**
   * 两个数求和
   * @param {number} value1 - 第一个数11
   * @param {number} value2 - 第二个数11
   * @returns {number} 两个数的和
   */
  stSum: (value1: number, value2: number): number => {
    return value1 + value2;
  },
  /**
   * 验证电子邮件地址是否有效
   * @param {string} email - 电子邮件地址字符串
   * @returns {boolean} 如果电子邮件地址有效则返回 true，否则返回 false
   */
  validEmail: (email: string): boolean => {
    // eslint-disable-next-line
    const reg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
  },
  /**
   * 时间段拆分成开始时间和结束时间
   * 例如： tools.formTimeSwitch({time: ['2024-01-19', '2024-01-20']}, 'time', 'stime', 'etime')
   * ['2024-01-19', '2024-01-20'] 返回[newStartKey]:'2024-01-19' [newEndKey]: '2024-01-20'（整天）
   * @param {any} oldValue 整个对象，用于去除时间段时间，返回新时间
   * @param {string} oldTimeKey 时间段key值
   * @param {string} newStartKey 开始时间key值
   * @param {string} newEndKey 结束时间Key值
   * @return {*} 新对象
   */
  formTimeSwitch: (oldValue:any, oldTimeKey:string, newStartKey:string, newEndKey:string): Object => {
    const searchParams = oldValue
    if(searchParams[oldTimeKey]){
      const starttime = searchParams[oldTimeKey][0] || undefined
      const endtime = searchParams[oldTimeKey][1] || undefined
      delete searchParams[oldTimeKey]
      return {
        ...searchParams,
        [newStartKey]: starttime,
        [newEndKey]: endtime + 86400000
      }
    }
    return searchParams
  }

}