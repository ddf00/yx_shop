import axios from 'axios'

const ajax = axios.create({
    baseURL: '/api',
    timeout: 10000, //超时时间
})

//请求拦截器
ajax.interceptors.request.use((config)=>{
    if(config.method.toUpperCase === 'POST' && (config.data instanceof Object)) {
        config.data = qs.stringify(config.data)
    }
    
    return config
})

// 响应拦截器
ajax.interceptors.response.use(
    response => response.data,
    error => {
        return new Promise(()=>{}) //终端Promise链
    }
)

export default ajax