import service from './axios'

// 通过mock系统api地址获取dts定义
export function getDTS (params) {
    return service.get('/ts/getDTS', {params: params})
}