import { useToast } from "@/hooks/use-toast"
import { UserEmail, UserName } from "@/store/user"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import Loading from "@/components/Loading"

const Signup = () => {
  const navigate = useNavigate()
  const {toast} = useToast()
  // @ts-ignore
      const [recoilUser, setRecoilUser] = useRecoilState(UserName)
      // @ts-ignore
      const [recoilEmail, setRecoilEmail] = useRecoilState(UserEmail)
      const [loading, setloading] = useState(false)
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const signupFunction = async(e: any) => {
    e.preventDefault()
    setloading(true)
    try {    
        const res = await axios.post('http://localhost:4000/api/auth/signup', {name: userData.name, email: userData.email, password: userData.password})
        if (res.data.success) {
            const jwt = res.data.token;
            localStorage.setItem("token", jwt)
            console.log("res.data is: ", res.data)
            setRecoilUser(userData.name)
            setRecoilEmail(userData.email)
            navigate('/feedback');
            setuserData({
              name: '',
              email: '',
              password: ''
            })
            setloading(false)
          } else {
            toast({ variant: 'destructive', description: res.data.message });
            setloading(false)
        }
    } catch (err) {
        console.log(err)
    }
  }
  
  return (
    <>
    {loading && <div className="min-h-[100vh] min-w-[100vw] absolute z-10 bg-gray-900 text-white"><Loading/></div>}
        <div className='min-h-[100vh] min-w-[100vw] bg-black flex justify-center items-center'>
        <div className="flex justify-center">
          <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold pb-5">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input value={userData.name} onChange={(e) => setuserData({...userData, name: e.target.value})} type="name" id="name" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="John Doe"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                <input value={userData.email} onChange={(e) => setuserData({...userData, email: e.target.value})} type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="johndoe@gmail.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                <input value={userData.password} onChange={(e) => setuserData({...userData, password: e.target.value})} type="password" id="password" className={`bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4 `} placeholder="*********" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button disabled={loading} onClick={signupFunction} type="submit" className={`text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto ${loading ? 'cursor-not-allowed bg-purple-400' : 'bg-purple-600 cursor-pointer hover:bg-purple-700'}`}> Submit </button>
                <div className="flex items-center text-sm">
                  <p>Already have a account?</p>
                  <Link to='/login' className="underline cursor-pointer ml-1 hover:text-blue-500">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
