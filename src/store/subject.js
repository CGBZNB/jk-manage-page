import { reqGetSubjects} from "@/api/subject";
import{setSubject,getSubject}from "@/utils/cookie"
import qs from 'qs'
const state={
    subjects:getSubject("SUBJECT")
};
const mutations={
    GETSUBJECTS(state,data){
        state.subjects=data
    }
};
const actions={
    async getSubjects({commit},params){
        console.log(params)
        let result=await reqGetSubjects(params);
        if(result.code==200){
            commit("GETSUBJECTS",result.data);
            console.log(result.data)
            let data=JSON.stringify(result.data);
            setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters
}