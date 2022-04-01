import { reqGetCode,reqPostRegister,reqGetValidate} from "@/api";

const state={
    code:""
};
const mutations={
    GETCODE(state,code){
        state.code=code
    }
};
const actions={
    async getCode({commit},account){
        let result=await reqGetCode(account);
        console.log(result)
        if(result.code==200){
            commit("GETCODE",result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
       },  
    async register({commit},pararms){
           let result=await reqPostRegister(pararms.form,pararms.code)
           console.log(pararms.form,)
           console.log(pararms.code)
           console.log(result)
           if(result.code==200){
           
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
       },
     async  validate({commit},pararms){
        let result=await reqGetValidate(pararms.date,pararms.type)
        if(result.data==0){     
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