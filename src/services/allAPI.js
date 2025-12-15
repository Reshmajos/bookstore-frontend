import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


// register api: called by authentication component when register btn clicked
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

// login api: called by authentication component when register btn clicked
export const loginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}
// google/sign-in api: called by authentication component when login using google btn clicked
export const googleLoginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api : called by sellbook component when add book btn click

export const addBookAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}