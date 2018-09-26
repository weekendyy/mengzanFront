import Base from '../../utils/base.js'
class My extends Base {
  constructor() {
    super()
  }
  // 获取首页信息
  getHomeData(queryData, callback) {
    let param = {
      url: 'v11/shop/get_index_info',
      data: {
      },
      sCallback(ResData) {
        callback && callback(ResData)
      }
    }
    this.request(param)
  }
  
}
const MyModel = new My()
export default MyModel
