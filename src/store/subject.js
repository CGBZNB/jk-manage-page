import { reqGetSubjects} from "@/api/subject";
import{setSubject,getSubject}from "@/utils/cookie"
import qs from 'qs'
const state={
    subjects:getSubject("SUBJECT"),
    subject:{}
};
const mutations={
    GETSUBJECTS(state,data){
        state.subjects=data
     
    },
    GETSUBJECT(state,index){
        
        state.subject=state.subjects[index-1]
      
    },
    SETSUBJECT(state,params){
        console.log("sdsdsd")
        state.subjects[params.index-1]=params.subject
      
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
    },
    getSubject({commit},index){
     
        commit("GETSUBJECT",index)
    },
    setSubject({commit},params){
        console.log(params)
       commit("SETSUBJECT",params)
    },

};
const getters={

};

export default{
    state,
    mutations,
    actions,
    getters
}