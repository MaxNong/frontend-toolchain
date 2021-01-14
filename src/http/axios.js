
import axios from 'axios'
import {message} from 'antd'

const service = axios.create({
	timeout: 5000
})

service.interceptors.request.use()
service.interceptors.response.use((response) => {
	const resData = response.data
	if (resData.code == 1) {
		return Promise.resolve(resData)
	} else {
		message.error(resData.message || '接口数据异常')
		return Promise.reject('code异常')
	}
}, (error) => {
	return Promise.reject(error)
})

export default service