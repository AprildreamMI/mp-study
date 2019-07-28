import { post, get, put, remove, baseURL } from './config'

export const uploadURL = baseURL + '/weapi/v1/uploads'

/**
 * 登录，获取token等
 * @param {*} data
 */
export const getAuthenticate = (data) => post(`/api/v1/authenticate`, data)

/**
 * 获取用户的认证状态，角色
 * @param {*} data
 */
export const getUserRoleStatus = (data) => get(`/api/v1/auth_user/status`, data)

/**
 * 获取用户的账号信息
 * @param {*} data
 */
export const getUserInfo = (data) => get(`/api/v1/user`, data)

/**
 * 发送短信验证码
 * @param {*} data
 */
export const sendSmsCode = (data) => post(`/api/v1/sendCode`, data)

/**
 * 编辑用户信息（已认证，修改姓名/手机号等）
 * @param {*} data
 */
export const editUserInfo = (data) => put(`/api/v1/user`, data)

/**
 * 提交认证信息（未认证）
 * @param {*} data
 */
export const submitAuthUserInfo = (data) => post(`/api/v1/auth_user`, data)

/**
 * 修改认证信息（已认证/未认证）
 * @param {*} data
 */
export const editAuthUserInfo = (data) => put(`/api/v1/auth_user`, data)

/**
 * 获取首页信息
 * @param {*} data
 */
export const getIndexContent = (data) => get(`/api/v1/index`, data)

/**
 * 获取欢迎页课程列表
 * @param {*} data
 */
export const getWelcomeContent = (data) => get(`/api/v1/courses/boutique`, data)

/**
 * 获取/搜素课程列表
 * @param {*} data
 */
export const getCourseList = (data) => get(`/api/v1/courses`, data)

/**
 * 获取课程详情
 * @param {*} courseId
 * @param {*} data
 */
export const getCourseDetail = (courseId, data) => get(`/api/v1/course/${courseId}`, data)

/**
 * 获取老师详情
 * @param {*} teacherId
 * @param {*} data
 */
export const getTeacherDetail = (teacherId, data) => get(`/api/v1/teacher/${teacherId}`, data)

/**
 * 获取课程标签列表
 * @param {*} data
 */
export const getTagList = (data) => get(`/api/v1/tags`, data)

/**
 * 获取酒店列表
 * @param {*} data
 */
export const getHotelList = (data) => get(`/api/v1/proposal/hotels`, data)

/**
 * 创建方案保存
 * @param {*} data
 */
export const savePlanCreated = (data) => post(`/api/v1/proposal/save`, data)

/**
 * 创建方案提交
 * @param {*} data
 */
export const commitPlanCreated = (data) => post(`/api/v1/proposal/submit`, data)

/**
 * 保存的方案提交
 * @param {*} planId
 * @param {*} data
 */
export const commitPlanSaved = (planId, data) => put(`/api/v1/proposal/${planId}/submit`, data)

/**
 * 保存的方案编辑
 * @param {*} planId
 * @param {*} data
 */
export const editPlanSaved = (planId, data) => put(`/api/v1/proposal/${planId}`, data)

/**
 * 获取方案列表
 * @param {*} data
 */
export const getPlanList = (data) => get(`/api/v1/proposals`, data)

/**
 * 获取方案详情
 * @param {*} planId
 * @param {*} data
 */
export const getPlanDetail = (planId, data) => get(`/api/v1/proposal/${planId}`, data)

/**
 * 作废（软删除）方案
 * @param {*} planId
 * @param {*} data
 */
export const deletePlan = (planId) => remove(`/api/v1/proposal/${planId}`)

/**
 * 下载方案文件（通过邮箱方式）
 * @param {*} planId
 * @param {*} data
 */
export const downLoadPlan = (planId, data) => post(`/api/v1/proposal/${planId}/down`, data)

/**
 * 获取消息列表
 * @param {*} data
 */
export const getMessageList = (data) => get(`/api/v1/messages`, data)

/**
 * 获取未读消息数目
 * @param {*} data
 */
export const getMessageCount = (data) => get(`/api/v1/messages/counts`, data)

/**
 * 更新未读消息为已读
 * @param {*} data
 */
export const updateMessageStatus = (data) => put(`/api/v1/messages`, data)

/**
 * 获取项目的基本配置
 * @param {*} data
 */
export const getBasicSetting = (data) => get(`/weapi/v1/bas_setting`, data)

