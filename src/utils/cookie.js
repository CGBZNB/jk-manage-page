export const setSubject=(data)=>{
  console.log(data)
  localStorage.setItem("SUBJECT",data);
}

export const getSubject=(name)=>{
  return JSON.parse(localStorage.getItem(name))
}