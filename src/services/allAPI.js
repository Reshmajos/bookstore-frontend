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

// books/home : homapage books api : called by home component when page loads
export const getHomePageBooksAPI = async () =>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// /books/all : bookpage api called by book component when page loads-authorised user can seen
export const getAllBooksAPI = async (reqHeader,searchKey) =>{
    return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}
//  /user-books/all : called by bookstatus when page loads
export const getAllUserBooksAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// /user-books/bought : get request called by purchase component when it loads
export const getAllUserBoughtBooksAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

// books/:id/view : get request by view when page loads
export const viewBookAPI = async (reqHeader,id) =>{
    return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}
// user/:id/edit : put request by edit when update btn click
export const editUserAPI = async (id,reqBody,reqHeader,) =>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}
 