import React, { useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';
import { editUserAPI } from '../../services/allAPI';
import { useNavigate } from 'react-router-dom';


function Edit() {
  const[offcanvasStatus,setoffcanvasStatus] = useState(false)
  const [userDetails,setUserDetails] = useState({
    id:"",username:"",password:"",role:"",bio:"",picture:""
  })

  const[confirmPassword,setConfirmPassword] = useState("")
  const[existingPicture,setExistingPicture] = useState("")
  const[preview,setPreview] = useState('')
  const[passwordMatch,setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
      setExistingPicture(user.picture)
    }
  },[])

  const checkPasswordmatch = (data)=>{
setConfirmPassword(data)
userDetails.password== data ? setPasswordMatch(true):setPasswordMatch(false)
  }

  const handleProfileUpdate = async ()=>{
    const {username,password,bio,role,id,picture} = userDetails
    if(!username || !password || !bio || !confirmPassword){
       toast.info("please fill the form completely")
    }else{
const token = sessionStorage.getItem("token")
if(token){
  const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const reqBody = new FormData()
    for(let key in userDetails){
      if(key!= "picture"){
        reqBody.append(key,userDetails[key])
      }else{
 preview ? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
      }
    }
    const result = await editUserAPI(id,reqBody,reqHeader)
    if(result.status==200){
toast.success("profile updated successfully...please login with new password.....")
setTimeout(() => {
  navigate('/login')
}, 2000);
    }else{
      console.log(result);
      toast.error("something went wrong")
      
    }
}
    }
  }

const handleUploadPicture = (imgFile)=>{
setUserDetails({...userDetails,picture:imgFile})
const url = URL.createObjectURL(imgFile)
setPreview(url)
}

const resetForm = ()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
   setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
      setExistingPicture(user.picture)
      setPreview("")
      setConfirmPassword("")
      setPasswordMatch(true)
}

  return (
    <div>
        <button onClick={()=>setoffcanvasStatus(true)} className='flex items-center text-blue-600 rounded p-2 hover:text-white hover:bg-blue-600'>Edit <FaEdit className='ms-3'/></button>
        {/* offcanvas */}
        {
          offcanvasStatus &&
          <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
<div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
{/* header */}
<div className="bg-black p-3 flex justify-between  text-white ">
<h3 className="text-lg">Update Profile</h3>
<button onClick={()=>setoffcanvasStatus(false)}><FaX/> </button>
</div>
{/* body */}
<div className="flex justify-center items-center flex-col mb-5 mt-10">
{/* image */}
<label htmlFor="uploadImg">
  <input onChange={e=>handleUploadPicture(e.target.files[0])} type="file" id='uploadImg' hidden/>
  {
    existingPicture?
    <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={preview?preview:existingPicture.startsWith("https://1h3.googleusercontent.com")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="" />
    :
    <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={preview?preview:"https://cdn2.iconfinder.com/data/icons/dottie-user-part-1/24/user_003-upload-profile-account-people-arrow-512.png"} alt="" />
  }
</label>

<button style={{marginTop:'-25px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
{/* name */}
<div className="mt-10 mb-3 w-full px-5">
  <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username'className='border border-gray-200 p-2 rounded w-full' />
</div>
{/* password */}
<div className=" mb-3 w-full px-5">
  <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password'className='border border-gray-200 p-2 rounded w-full' />
</div>
<div className=" mb-3 w-full px-5">
  <input value={confirmPassword} onChange={e=>checkPasswordmatch(e.target.value)}   type="password" placeholder='Confirm Password'className='border border-gray-200 p-2 rounded w-full' />
</div>
{
  !passwordMatch &&
  <div className=" mb-3 w-full px-5 font-bold text-red-600 text-xs">
  *Confirm password must match with new password
</div>
}
{/* bio */}
<div className=" mb-3 w-full px-5">
  <textarea value={userDetails.bio} onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" rows={3} placeholder='Bio'className='border border-gray-200 p-2 rounded w-full' />
</div>
{/* button */}
<div className=" mb-3 w-full px-5 flex justify-end mt-5">
  <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
<button onClick={ handleProfileUpdate} className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600 ms-5' disabled={!passwordMatch?true:false}>UPDATE</button>

</div>
</div>

</div>
   </div>
        </div>
        }
         {/* toast */}
                    <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="colored"
              />
    </div>
  )
}

export default Edit
