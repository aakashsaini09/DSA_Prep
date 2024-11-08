import { useToast } from '@/hooks/use-toast'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const {toast} = useToast()
    const navigate = useNavigate()
  const [userData, setuserData] = useState({
    email: '',
    password: ''
  })
  const loginfunction = async(e: any) => {
    e.preventDefault()
    try {    
        const res = await axios.post('http://localhost:4000/api/auth/login', {email: userData.email, password: userData.password})
        if (res.data.success) {
            const jwt = res.data.token;
            localStorage.setItem("token", jwt)
            navigate('/feedback');
        } else {
            toast({ variant: 'destructive', description: res.data.message });
        }
    } catch (err) {
        console.log(err)
    }
  }
  return (
    <>
      <div className='min-h-[100vh] min-w-[100vw] bg-black flex justify-center items-center'>
        <div className="flex justify-center">
          <div className="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold pb-5">Sign In</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                <input value={userData.email} onChange={(e) => setuserData({ ...userData, email: e.target.value })}  type="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4" placeholder="andrew@mail.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                <input value={userData.password} onChange={(e) => setuserData({ ...userData, password: e.target.value })}  type="password" id="password" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"placeholder="*********" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <button onClick={loginfunction} type="submit" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto" > Submit </button>
                <div className="flex items-center text-sm">
                  <p>New here?</p>
                  <Link to={'/signup'} className="underline cursor-pointer ml-1 hover:text-blue-500">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
