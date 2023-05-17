import request from '@/utils/request' // 引入封装得axios
import qs from 'qs'
const axios=request

export const resLogin=(Form)=>{
    return axios.post('http://127.0.0.1:8000/reslogin/',
        qs.stringify({"username":Form.username,"password":Form.password}))
}

// 获取新闻列表
export const getDetailInfo=(id)=>{
    return axios.get(`http://127.0.0.1:8000/inform/${id}/`)
}

export const getArticleList= ()=> {
    return axios.get('http://127.0.0.1:8000/inform/?ispubliced=1&ordering=-inform_time')
}
export const getAdmins=()=>{
    return axios.get('http://127.0.0.1:8000/admins')
}
export const  getAbnList=()=>{
    return axios.get('http://127.0.0.1:8000/abnormals/?abnormal_id=202310002&ordering=-regis_time')
}

export const postAbno=(Form)=>{
    return axios.post('http://127.0.0.1:8000/abnormaltable/',
        qs.stringify({"abnormal":Form.abnormal,"abcondition":Form.abcondition}))
}
//materials
export const postMats=(ruleForm)=>{return axios.post('http://127.0.0.1:8000/materials/',
    qs.stringify({"applicant":ruleForm.applicant,"material":ruleForm.material}))}
export const getMats=()=>{return axios.get('http://127.0.0.1:8000/viewmaterials/?applicant_id=202310002&?ordering=-apply_time')}

//inform

//serve
export const getServeInfo=()=>{
    return axios.get('http://127.0.0.1:8000/serve/?res_id=202310002')
}
export const getServeCardInfo=()=>{return axios.get('http://127.0.0.1:8000/serveinfo/?ordering=-start_time&isend=0')}
export const postServeReg=(id)=>{
    return axios.post('http://127.0.0.1:8000/servereg/',
        qs.stringify({"serve":id,"res":202310002},))
}
