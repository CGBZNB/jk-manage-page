export const setSubject=(data)=>{
  
  localStorage.setItem("SUBJECT",data);
}

export const getSubject=(name)=>{
  return JSON.parse(localStorage.getItem(name))
}

export const setToken=(token)=>{
  localStorage.setItem("TOKEN",token);
}

export const getToken=()=>{
  return localStorage.getItem("TOKEN");
}

export const removeToken=()=>{
  return localStorage.removeItem("TOKEN");
}