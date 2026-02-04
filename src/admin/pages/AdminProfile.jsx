import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';



function AdminProfile() {

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

  const handleUploadPicture = (imgFile)=>{
setUserDetails({...userDetails,picture:imgFile})
const url = URL.createObjectURL(imgFile)
setPreview(url)
}

const checkPasswordmatch = (data)=>{
setConfirmPassword(data)
userDetails.password== data ? setPasswordMatch(true):setPasswordMatch(false)
  }

   const handleProfileUpdate = async ()=>{
      const {username,password,bio,role,id,picture} = userDetails
      if(!username || !password || !confirmPassword){
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
  

  const resetForm = ()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
   setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
      setExistingPicture(user.picture)
      setPreview("")
      setConfirmPassword("")
      setPasswordMatch(true)
}

  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
            {/* text */}
            <div>
              <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel of BookStore Management.</h2>
              <p className='text-justify mb-5'>This section provides complete control over your personal admin account. Here, you can update your profile information, edit contact details, and manage your login credentials to ensure secure access to the system. You can also review a detailed history of your activities, including logins, changes made to the bookstore data, and other administrative actions. These tools help you monitor your account usage, maintain transparency, and quickly identify any unusual activity. Additionally, you can customize your profile settings to match your preferences, making your admin experience more organized and efficient. Overall, this panel helps you keep your account secure, accurate, and fully up to date.</p>

         <p className='font-bold mb-2'>🔧 Account Settings</p>
         <ul>
          <li>
             1. Profile Information: Full Name,Email Address,Phone Number,Profile Photo
          </li>
  
  <li>
    2. Login Credentials:Change Password, Update Login Email, Enable Two-Factor Authentication (2FA), View linked login devices
  </li>
  
 <li>
    3. Activity Logs:Login history,Books added/edited,Orders updated,Settings changes
 </li>
         </ul>
            </div>
            {/* form */}
            <div className="flex justify-center items-center flex-col rounded bg-blue-100 p-5">
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
  <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username'className='border border-gray-800 p-2 rounded w-full' />
</div>
{/* password */}
<div className=" mb-3 w-full px-5">
  <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password'className='border border-gray-800 p-2 rounded w-full' />
</div>
<div className=" mb-3 w-full px-5">
  <input value={confirmPassword} onChange={e=>checkPasswordmatch(e.target.value)}   type="password" placeholder='Confirm Password'className='border border-gray-800 p-2 rounded w-full' />
</div>
{
  !passwordMatch &&
  <div className=" mb-3 w-full px-5 font-bold text-red-600 text-xs">
  *Confirm password must match with new password
</div>
}


{/* button */}
<div className=" mb-3 w-full px-5 flex justify-center mt-5">
  <button onClick={resetForm} className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
<button onClick={handleProfileUpdate} className='px-3 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600 ms-5'disabled={!passwordMatch?true:false}>UPDATE</button>

</div>
</div>
          </div>
        </div>
      </div>
      <Footer/>
       {/* toast */}
                          <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    theme="colored"
                    />
      </>
  )
}

export default AdminProfile