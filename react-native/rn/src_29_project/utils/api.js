/**
 * 数据接口
 * 
 * 建议：将下列接口中的密码，改成自己的。否则，密码一旦失效，将无法调用接口
 */

/**
 * 获取新闻列表
 * 
 * 详情参考：https://www.juhe.cn/docs/api/id/235
 */
export const getNewsList = async (type) => {
  const key = "6d7ee8d88bd4fb137f5d20ce7066a700"
  const url = `http://v.juhe.cn/toutiao/index?type=${type}&key=${key}`

  try {
    const response = await (await fetch(url)).json()
    if (response.error_code === 0) {
      return response.result.data
    } else {
      return []
    }
  } catch (error) {
    console.log('Fetch Error: ', error)
  }
}

/**
 * 获取城市信息
 * 
 * 详情参考：https://dev.qweather.com/docs/api/geo/
 */
export const getCityInfo = async (coords) => {
  const key = "687e517f06684448a9f4695721414a07"
  const url = `https://geoapi.qweather.com/v2/city/lookup?key=${key}&location=${coords.longitude},${coords.latitude}`
  // console.log('url', url)

  try {
    const response = await (await fetch(url)).json()
    if (response.code === '200') {
      return response.location[0]
    } else {
      return {}
    }
  } catch (error) {
    console.log('Fetch Error: ', error)
  }
}

/**
 * 获取三天天气预报
 * 
 * 详情参考：https://dev.qweather.com/docs/api/weather/
 */
export const getThreeDays = async (coords) => {
  const key = "687e517f06684448a9f4695721414a07"
  const url = `https://devapi.qweather.com/v7/weather/3d?key=${key}&location=${coords.longitude},${coords.latitude}`

  try {
    const response = await (await fetch(url)).json()
    if (response.code === '200') {
      return response.daily
    } else {
      return []
    }
  } catch (error) {
    console.log('Fetch Error: ', error)
  }
}

/**
 * 获取生活指数，默认 type=0，获取所有的生活指数
 * 
 * 详情参考：https://dev.qweather.com/docs/api/indices/
 */
export const getIndices = async (coords, type = 0) => {
  const key = "687e517f06684448a9f4695721414a07"
  const url = `https://devapi.qweather.com/v7/indices/1d?key=${key}&location=${coords.longitude},${coords.latitude}&type=${type}`
  console.log('url', url)

  try {
    const response = await (await fetch(url)).json()
    if (response.code === '200') {
      return response.daily
    } else {
      return []
    }
  } catch (error) {
    console.log('Fetch Error: ', error)
  }
}
