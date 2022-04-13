import { reqGetCode,reqPostRegister,reqGetValidate,reqPostLogin,reqGetUserInfo} from "@/api/user";
import { getToken,setToken ,removeToken} from "@/utils/cookie";
const state={
    token:getToken(),
    code:"",
    userinfo:{}
};
const mutations={
    GETCODE(state,code){
     
        state.code=code
    },
    changeLogin (state, token) {
        state.token = token;
       
      },
      LOGOUT(state) {
       state.token=''
       state.userinfo={}
       removeToken()
        
      },
      GETUSER(state,data){
        state.userinfo=data
       // localStorage.setItem('userinfo', JSON.stringify(data));
      }
 
};
const actions={
    async getCode({commit},account){
        let result=await reqGetCode(account);
        
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
    },
    async login({commit},pararms){
        let result=await reqPostLogin(pararms)
        if(result.code==201){
            commit('changeLogin',result.data)
            setToken(result.data)
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }

    },
    async getuserinfo({commit}){

        let result=await reqGetUserInfo()
        if(result.code==200){
          
            commit('GETUSER',result.data)
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }

    },logout({commit}){
        commit('LOGOUT')
    }
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters
}