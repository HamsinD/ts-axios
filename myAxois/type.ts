/**
 * 类型接口
 * @author: deng
 * @date: 2020/03/09
 * 
 */


export interface AxiosResponse<T = any> = {
    data: T
    status: number
    statusText: string
    headers: any
    config: object
    request: any
}
