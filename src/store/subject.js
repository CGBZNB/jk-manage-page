import { reqGetSubjects,reqGetExam,reqGetSC} from "@/api/subject";
import{setSubject,getSubject}from "@/utils/cookie"
import { shuffle } from "@/utils/arr";
import qs from 'qs'
const state={
    subjects:{
        km1:{
        //   order:{
        //         currentindex:0,
        //         items:[],
        //         done:0
        //     },
        //     disorder:{
        //         currentindex:0,
        //         items:[],
        //         done:0
        //     }
            order:{
                currentindex:getSubject()==null?1:getSubject().km1.order.currentindex,
                items:getSubject()==null?[]:getSubject().km1.order.items,
                done:getSubject()==null?1:getSubject().km1.order.done
            },
            disorder:{
                currentindex:getSubject()==null?1:getSubject().km1.disorder.currentindex,
                items:getSubject()==null?[]:getSubject().km1.disorder.items,
                done:getSubject()==null?1:getSubject().km1.disorder.done
            },
            special:{
                danxuan:{
                    currentindex:getSubject()==null?1:getSubject().km1.special.danxuan.currentindex,
                    items:getSubject()==null?[]:getSubject().km1.special.danxuan.items,
                    done:getSubject()==null?1:getSubject().km1.special.danxuan.done
                },
                panduan:{
                    currentindex:getSubject()==null?1:getSubject().km1.special.panduan.currentindex,
                    items:getSubject()==null?[]:getSubject().km1.special.panduan.items,
                    done:getSubject()==null?1:getSubject().km1.special.panduan.done
                },
                imgitem:{
                    currentindex:getSubject()==null?1:getSubject().km1.special.imgitem.currentindex,
                    items:getSubject()==null?[]:getSubject().km1.special.imgitem.items,
                    done:getSubject()==null?1:getSubject().km1.special.imgitem.done
                },
                fimgitem:{
                    currentindex:getSubject()==null?1:getSubject().km1.special.fimgitem.currentindex,
                    items:getSubject()==null?[]:getSubject().km1.special.fimgitem.items,
                    done:getSubject()==null?1:getSubject().km1.special.fimgitem.done
                }
            }
        },
        km4:{

        }
    },
    items:{},
    subject:{
    },
    topics:{},
    errsubjects:[],
    scsubjects:[],
    index:0,
    exam:[]
};
const mutations={
    GETSUBJECTS(state,data){
      
        if(data.params.km==1){
          
            let s=data.s.slice(0)
            state.subjects.km1.order.items=data.s;
            state.subjects.km1.disorder.items=shuffle(s)

        }
       setSubject(JSON.stringify(state.subjects))
     
     
    },
    GETSUBJECT(state,data){
        state.currentindex=data.index
        state.subject=state.items[state.currentindex-1]
        if(data.km=='1'){
            
            if(data.type=='1'){
               state.subjects.km1.order.currentindex=state.currentindex
               
                
            }
            if(data.type=='0'){
                state.subjects.km1.disorder.currentindex=state.currentindex                
                 
             }
        }
      
    },
    SETSUBJECT(state,params){
      
        state.items[params.index-1]=params.subject
      
    },
    GETITEMS(state,data){
        
        if(data.km=='1'){
          
            if(data.type=='1'){
         
                state.items=state.subjects.km1.order.items
                state.topics=state.subjects.km1.order.items
                state.index=state.subjects.km1.order.currentindex
                state.subject=state.items[state.index-1]
                
            }
            if(data.type=='0'){
                
                state.items=state.subjects.km1.disorder.items
                state.topics=state.subjects.km1.disorder.items
                state.index=state.subjects.km1.disorder.currentindex
                state.subject=state.items[state.index-1]
                
            }
            if(data.type=='3'){
         
                state.items=state.subjects.km1.special.danxuan.items
                state.topics=state.subjects.km1.special.danxuan.items
                state.index=state.subjects.km1.special.danxuan.currentindex
                state.subject=state.items[state.index-1]
                
            }
            if(data.type=='4'){
                
                state.items=state.subjects.km1.special.panduan.items
                state.topics=state.subjects.km1.special.panduan.items
                state.index=state.subjects.km1.special.panduan.currentindex
                state.subject=state.items[state.index-1]
                
            }
            if(data.type=='5'){
         
                state.items=state.subjects.km1.special.imgitem.items
                state.index=state.subjects.km1.special.imgitem.currentindex
                state.subject=state.items[state.index-1]
                
            }
            if(data.type=='6'){
                
                state.items=state.subjects.km1.special.fimgitem.items
                state.index=state.subjects.km1.special.fimgitem.currentindex
                state.subject=state.items[state.index-1]
            }
            if(data.type=='7'){
                
                state.items=state.errsubjects
                state.index=1
                state.subject=state.items[state.index-1]
            }
            if(data.type=='8'){
               
                state.items=state.scsubjects
                state.index=1
                state.subject=state.items[state.index-1]
            }
        }
    },
    GETDANXUAN(state,data){
        console.log(data)
        state.subjects.km1.special.danxuan.items=data;
        setSubject(JSON.stringify(state.subjects))
    },
    GETPANDUAN(state,data){
        state.subjects.km1.special.panduan.items=data;
        setSubject(JSON.stringify(state.subjects))
    },
    GETIMGITEM(state,data){
        state.subjects.km1.special.imgitem.items=data;
        setSubject(JSON.stringify(state.subjects))
    },
    GETFIMGITEM(state,data){
        state.subjects.km1.special.fimgitem.items=data;
        setSubject(JSON.stringify(state.subjects))
    },
    GETEXAMS(state,data){
        state.exam=data
    },
    GETERRORSUBJECTS(state,data){
        state.errsubjects=data
    },
    GETSCSUBJECTS(state,data){
        state.scsubjects=data
    }

};
const actions={
    async getSubjects({commit},params){
     
        console.log(params)
        let result=await reqGetSubjects(params);

        if(result.code==200){
            let data={
                s:result.data,
                params
            }
            commit("GETSUBJECTS",data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getExam({commit},params){
     
        
        let result=await reqGetExam(params);

        if(result.code==200){
            commit("GETEXAMS",result.data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getDanxuanT({commit}){
     
        let params={
            type:3
        }
        let result=await reqGetSubjects(params);

        if(result.code==200){
            
            commit("GETDANXUAN",result.data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getPanDuanT({commit}){
     
        let params={
            type:0
        }
        let result=await reqGetSubjects(params);

        if(result.code==200){
            
            commit("GETPANDUAN",result.data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getImgItemT({commit}){
     
        let params={
            image:1
        }
        let result=await reqGetSubjects(params);

        if(result.code==200){
            
            commit("GETIMGITEM",result.data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async getFImgItemT({commit}){
     
        let params={
            type:0
        }
        let result=await reqGetSubjects(params);

        if(result.code==200){
            
            commit("GETFIMGITEM",result.data);
        
          //  let data=JSON.stringify(result.data);
            //setSubject(data)
        /// localStorage.setItem("SUBJECT",data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    getSubject({commit},data){
     
        commit("GETSUBJECT",data)
    },
    getItems({commit},data){
     
        commit("GETITEMS",data)
    },
    setSubject({commit},params){
        console.log(params)
       commit("SETSUBJECT",params)
    },

    async geterrsubjects({commit},params){
        let result=await reqGetSC(params)
        if(result.code==201){
            commit("GETERRORSUBJECTS",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error('faile'));
        }
       
    },
    async getscsubjects({commit},params){
        console.log(params)       
        let result=await reqGetSC(params)
        if(result.code==201){
            console.log(result.data)
            commit("GETSCSUBJECTS",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error('faile'));
        }
       
    }

};
const getters={

};

export default{
    state,
    mutations,
    actions,
    getters
}