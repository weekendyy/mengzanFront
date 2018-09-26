import Base from './base.js'
class View extends Base {
  constructor() {
    super()
  }
  // 更新用户访问量
  postViewData(queryData, callback) {
    let param = {
      url: 'v11/shop/add_view_num',
      data: {
      },
      sCallback(ResData) {
        callback && callback(ResData)
      }
    }
    this.request(param)
  }
}
const ViewModel = new View()
export default ViewModel
