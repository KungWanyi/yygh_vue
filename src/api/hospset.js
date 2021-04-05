import request from '@/utils/request'

export default{
  // 分页查询
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `/admin/hosp/hospitalSet/findPage/${current}/${limit}`,
      method: 'post',
      data: searchObj// 使用json
    })
  },
  // 删除
  deleteHospset(id) {
    return request({
      url: `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },
  // 批量删除
  batchRemoveHospSet(idList) {
    return request({
      url: `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList// 使用json
    })
  },
  // 锁定和取消锁定
  lookHospitalSet(id, status) {
    return request({
      url: `/admin/hosp/hospitalSet/lookHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  // 锁定和取消锁定
  saveHospitalSet(hospitalSet) {
    return request({
      url: `/admin/hosp/hospitalSet/saveHospitalSet/`,
      method: 'post',
      data: hospitalSet// 使用json
    })
  }
}
