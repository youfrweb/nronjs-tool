/*
 * @Author: youfanrong 737064439@qq.com
 * @Description: 运行 
 * @Date: 2023-11-21 16:04:19
 * @LastEditors: youfanrong 737064439@qq.com
 * @LastEditTime: 2024-01-09 11:27:38
 */
import { describe, expect, it } from 'vitest'
import tools from './index'
describe('对stSum求和函数进行测试', () => {
  it('should return 3 with 1+2', () => {
    expect(tools.formTimeSwitch({time: ['2024-01-19', '2024-01-20']}, 'time', 'stime', 'etime'))
  })
  it('should return 0 with 0+0', () => {
    // expect(zTool.stSum(0, 0)).toBe(0)
    expect(tools.cookie.set('111','222'))
  })
  // it('should return null with 2+null', () => {
  //   expect(zTool.stSum(2, null as any)).toBe(null)
  // })
})